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

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log(fruits);
    }
});