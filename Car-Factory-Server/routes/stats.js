const express = require('express')
const carData = require('../data/car')
const usersData = require('../data/users')

const router = new express.Router()

router.get('/', (req, res) => {
    const car = carData.total()
    const users = usersData.total()

    res.status(200).json({
        car,
        users
    }) 
})

module.exports = router
