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
        name: String,
        origin: String,
        rating: Number,
        review: String,
    }
);

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit(
    {
        name: "Apple",
        origin: "Malang",
        rating: 90,
        review: "This fruit tastes sweet!"
    }
);

// apple.save(function(error, apple){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(`Adding ${apple.name} is success!`);
//     }
// });


const pear = new Fruit(
    {
        name: "Pear",
        origin: "Malang",
        rating: 95,
        review: "This fruit tastes sweet and delicious!"
    }
);

const melon = new Fruit(
    {
        name: "Melon",
        origin: "Malang",
        rating: 95,
        review: "This fruit tastes sweet and delicious!"
    }
);

const banana = new Fruit(
    {
        name: "Banana",
        origin: "Malang",
        rating: 90,
        review: "This fruit tastes sweet!"
    }
);

Fruit.insertMany([apple,pear, melon, banana], function(error){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log(`Adding ${apple.name}, ${pear.name}, ${melon.name}, ${banana.name} is success!`);
    }
});