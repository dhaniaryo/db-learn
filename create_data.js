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

apple.save(function(error, apple){
    if(error){
        console.log(error);
    } else {
        console.log(`Adding ${apple.name} is success!`);
    }
});