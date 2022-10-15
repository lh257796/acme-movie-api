const { assert, expect } = require("chai");
// const beforeEach = require('mocha')
const { syncAndSeed, Actor, Movie, Role } = require("../db");
const app = require("supertest")(require("../app"));

describe("app status: ", () => {
  beforeEach( async() => {
    await syncAndSeed();
  });
  describe("1: Testing Hello", () => {
    describe("First ever test here:", () => {
      it("should return a green checkmark if this test is present", () => {
        assert.equal(true, 1);
      });
    });
  });

  describe("2: our home page", () => {
    it("has access to GET homepage", async () => {
      const response = await app.get("/");
      expect(response.status).to.contain(201);
    });
  });

  describe("3: Data Layer", () => {
    it("has 5 actors", async () => {
      const actors = await Actor.findAll();
      expect(actors.length).to.equal(5);
    });
  });
  describe("4: Data Layer", () => {
    it("has 4 movies", async () => {
      const movies = await Movie.findAll();
      expect(movies.length).to.equal(4);
    });
  });



});
