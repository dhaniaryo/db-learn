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

Fruit.deleteOne({
        _id: '61229d5ee9cc2126940b92fb'
    }, function(error){
        if(error){
            console.log(error);
        } else {
            console.log(`Delete data is success`);
        }
    }
);

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        console.log('Remaining data after deletion');
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        });
    }
});