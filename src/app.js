// const express = require('express')
// const path = require('path')
// const app = express()
//
// const w = path.join(__dirname, 'node_course/webserver/templates')
//
// app.set('view engine', 'hbs')
// app.set('templates', path.join(__dirname, 'node_course/webserver/templates'))
// app.use(express.static(w))
//
// app.get('', (req, res) => {
//     res.render('index')
// })
// app.listen(3000, () => {
//
//     console.log("hello my new server, shalki ")
// })

// app.get('/help', (req, res) => {
//     res.send("this is your help page SHALKI")
// })

// app.get('/title', (req, res) => {
//     res.send('<h1>mywebsite<h1>')
// })

//app.get('/weather', (req, res) => {
//     res.send([{a: 12, b: 4, c: 5}, {x: 3, y: 2}])
// })

const path = require('path')
const express = require('express')
const hbs = require('hbs')
const {response} = require("express");
const z = require("./app_2.cjs");
const url = require("url");
const a = express()

const w = path.join(__dirname, '../public')
const b = path.join(__dirname, '../templates/views')
const c = path.join(__dirname, '../templates/partials')

a.set('view engine', 'hbs')
a.set('views', b)
hbs.registerPartials(c)

a.use(express.static(w))

a.get('', (req, res) => {
    res.render('index', {
        name: 'shalkiii',
        age: 23
    })
})

// a.get('/about', (req, res) => {
//     res.render('help', {
//         job: " software engineer",
//         salary: "150K"
//     })
//})
a.get('/help', (req, res) => {
    if (!req.query.girls) {
        return res.status(400).send({
            error: "You must provide a search term"
        })
    }
    const my_query = req.query.girls
    console.log(my_query, " this is my query")

    z.ur1(my_query, (girls) => {
        res.send({
            girls: girls
        })
    });

});

a.get('/weather', (req, res) => {
    if (!req.query.show) {
        return res.status(400).send({
            error: "You must provide a search term"
        });
    }
    const a = req.query.show

    // Use ur1 function from app_2.cjs
    z.ur1(a, (showName) => {
        res.send({
            show: showName
        })
    });
})

a.listen(3000, () => {
    console.log(" our server is running")
})

