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

const peopleSchema = new mongoose.Schema(
    {
        name: {type: String, required: [true, 'name field is required']},
        origin: {type: String, required: [true, 'origin field is required']},
        age: {type: Number, min: 1, required: [true, 'rating field is required']},
        favoriteFruit: fruitSchema,
    }
);

const People = mongoose.model("People", peopleSchema);

const favoriteFruit = new Fruit(
    {
        name: "Coconut",
        origin: "Purwokerto",
        rating: 90,
        review: "This fruit tastes sweet!"
    }
);

favoriteFruit.save(function(error, apple){
    if(error){
        console.log(error);
    } else {
        console.log(`Adding ${favoriteFruit.name} is success!`);
    }
});

const people = new People(
    {
        name: 'Jack',
        origin: 'Australia',
        age: 30,
        favoriteFruit: favoriteFruit
    }
);

people.save(function(error, apple){
    if(error){
        console.log(error);
    } else {
        console.log(`Adding relationship is success!`);
    }
});