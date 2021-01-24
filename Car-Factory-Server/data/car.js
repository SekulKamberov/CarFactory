const carData = {}
let currentId = 0

module.exports = {
    total: () => Object.keys(carData).length,
    save: (car) => {
      const id = ++currentId.id
      car.id = id

      let newCar = {
        id,
        make: car.make,
        model: car.model,
        year: car.year,
        description: car.description,
        price: car.price,
        image: car.image,
        createdOn: new Date(),
        createdBy: car.createdBy,
        likes: [],
        reviews: []
        }

        if(car.material){
            car.material = car.material
        }

        carData[id] = newCar
    }
    all: (page, search) => {
        //todo: from my gym proj
    },
    findById: (id) => {
        return carData[id]
    },
    addReview: (id, rating, comment, user) => {
        const review = {
            rating,
            comment,
            user,
            createdOn: new Date()
        }

        carData[id].reviews.push(review)
    },
    allReviews: (id) => {
        return carData[id]
        .reviews
        .sort((a, b) => b.createdOn - a.createdOn)  
        .slice(0)    
    },
    like: (id, user) => {
        const likes = carData[id].likes

        if(likes.indexOf(user) >= 0) {
            return false
        }

        likes.push(user)

        return true
    },
    byUser: (user) => {
        return Object
        .keys(carData)
        .map(key => carData[key])
        .filter(car => car.createdBy === user)
        .sort((a, b) => b.id - a.id)
    },
    delete: (id) => {
        delete carData[id]
    },
    edit: (id, newItem) => {
        newItem['id'] = id;
        newItem['createdBy'] = carData[id]['createdBy'];
        carData[id] = newItem;
    }
}