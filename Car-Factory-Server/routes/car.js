const express = require('express')
const authCheck = require('../middleware/auth-check')
const carData = require('../data/car')

const router = new express.Router()

function validateCarForm (payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

    payload.hp = parseInt(payload.hp)
    payload.doors = parseInt(payload.doors)
    payload.year = parseInt(payload.year)
    payload.price = parseInt(payload.price)

    if(!payload || typeof payload.make !== 'string' || payload.make.length < 3){
        isFormValid = false
        errors.make = 'Make must be more than 3 symbols'
    }

    if(!payload || typeof payload.model !== 'string' || payload.model.length < 3){
        isFormValid = false
        errors.model = 'Model must be more than 3 symbols'
    }

    if(!payload || typeof payload.engine !== 'string' || payload.engine.length < 3){
        isFormValid = false
        errors.engine = 'Engine must be more than 3 symbols'
    }

    if(!payload || !payload.hp || payload.hp < 0 ){
        isFormValid = false
        errors.hp = 'Horsepower must be a positive number'
    }

    if(!payload || !payload.doors || payload.doors < 3 ){
        isFormValid = false
        errors.doors = 'Doors must be more than 3'
    }

    if(!payload || typeof payload.gearbox !== 'string' || payload.gearbox.length < 3){
        isFormValid = false
        errors.gearbox = 'Gearbox must be more than 3 symbols'
    }

    if(!payload || !payload.year || payload.year < 2021 || payload.year > 2070 ){
        isFormValid = false
        errors.year = 'Year must be between 2021 and 2070'
    }

    if(!payload || payload.description !== 'string' || payload.description.length < 10 ){
        isFormValid = false
        errors.description = 'Description must be more than 10 symbols'
    }

    if(!payload || !payload.price || payload.price < 0 ){
        isFormValid = false
        errors.price = 'Prise must be a positive number'
    }

    if(!payload || typeof payload.image !== 'string' || payload.image.length === 0 ){
        isFormValid = false
        errors.image = 'Image url is required'
    }

    if (!isFormValid) {
        message = 'Check the form for errors'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

router.post('/create', authCheck, (req, res) => {
    const car = req.body
    car.createdBy = req.user.email

    const validationResult = validateCarForm(car)
    if(!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    carData.save(car)

    res.status(200).json({
        success: true,
        message: 'Car added successfuly',
        car
    })
})

router.get('/all', (req, res) => {
    const page = parseInt(req.query.page) || 1
    const search = req.query.search
    const car = carData.all(page, search)

    res.status(200).json(car)
})

router.get('/details/:id', authCheck, (req, res) => {
    const id = req.params.id
    const car = carData.findById(id)

    if (!car) {
        return res.status(401).json({
            success: false,
            message: 'Entry does not exists'
        })
    }

    let response = {
        id,
        make: car.make,
        model: car.model,
        engine: car.engine,
        hp = car.hp,
        doors = car.doors,
        gearbox = car.gearbox,
        year: car.year,
        description: car.description,
        price: car.price,
        image: car.image,
    }


    if (car.color) {
        response.color = car.color
    }

    res.status(200).json(response)
})

router.get('/mine', authCheck, (req, res) => {
    const user = req.user.email
    const car = carData.byUser(user)

    res.status(200).json(car)
})

router.delete('/delete/:id', authCheck, (req, res) => {
    const id = req.params.id
    const user = req.user.email

    const car = carData.findById(id)

    if (!car || car.createdBy !== user) {
        return res.status(200).json({
            success: false,
            message: 'Car does not exists'
        })
    }

    carData.delete(id)

    return res.status(200).json({
        success: true,
        message: 'Car deleted successfully'
    })
})

router.put('/edit/:id', authCheck, (req, res) => {
    const id = req.params.id;
    const user = req.user.email;
    const car = req.body;

    if (!car || !req.user.roles.includes('Admin')) {
        return res.status(404).json({
            success: false,
            message: 'Car does not exists'
        })
    }

    const validationResult = validateCarForm(car)
    if (!validationResult.success) {
        return res.status(400).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    carData.edit(id, car);
    car.id = id;

    return res.status(200).json({
        success: true,
        message: 'Car edited successfuly'
    })
})

router.get('/:id', authCheck, (req, res) => {
    const id = req.params.id
    const car = carData.findById(id)

    if (!car) {
        return res.status(404).json({
            success: false,
            message: 'Entry does not exist'
        })
    }

    let response = {
        id,
        make: car.make,
        model: car.model,
        engine: car.engine,
        hp = car.hp,
        doors = car.doors,
        gearbox = car.gearbox,
        year: car.year,
        description: car.description,
        price: car.price,
        image: car.image,
    }

    if (car.color) {
        response.color = car.color
    }

    res.status(200).json(response)
})

module.exports = router
