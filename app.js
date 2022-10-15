const express = require('express')
const app = express();
const {Actor, Movie} = require('./db')

app.get('/', (req,res,next) => {
    res.send('Hello world')
})

app.get('/api/movies',async(req,res,next) => {
    try{
        const movies = await Movie.findAll()
        res.send(movies)
    }
    catch(ex) {
        next(ex)
    }
})

app.get('/api/actors',async(req,res,next) => {
    try{
        const actors = await Actor.findAll()
        res.send(actors)
    }
    catch(ex) {
        next(ex)
    }
})

module.exports = {
    app,
    express
}
