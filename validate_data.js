const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/db-crud', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
);

const fruitSchema = new mongoose.Schema(
    {
        name: {type: String, required: [true, 'name field is required']},
        origin: {type: String, required: [true, 'origin field is required']},
        rating: {type: Number, min: 1, max: 100, required: [true, 'rating field is required']},
        review: String,
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const lemon = new Fruit(
    {
        name: "Lemon",
        origin: "Malang",
        rating: 90,
        review: "This fruit tastes sour and you must adding some sugar to make a glass of juice!"
    }
);

const watermelon = new Fruit(
    {
        name: "Watermelon",
        origin: "Malang",
        rating: 95,
        review: "This fruit tastes sweet and delicious!"
    }
);

const orange = new Fruit(
    {
        name: "Orange",
        origin: "Malang",
        rating: 85,
        review: "This fruit tastes sweet!"
    }
);

const strawberry = new Fruit(
    {
        name: "Strawberry",
        origin: "Purbalingga",
        rating: 90,
        review: "This fruit tastes sweet!"
    }
);

Fruit.insertMany([lemon, watermelon, orange, strawberry], function(error){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log(`Adding ${lemon.name}, ${watermelon.name}, ${orange.name}, ${strawberry.name} is success!`);
    }
});