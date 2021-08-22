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

Fruit.updateOne({
        _id: '61229d6237669a2e9470c1f9'
    },
    {
        name: 'Jackfruit',
        origin: 'Pemalang'
    }, function(error){
        if(error){
            console.log(error);
        } else {
            console.log(`Update data is success`);
        }
    }
);

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        mongoose.connection.close();
        // console.log(fruits);
        fruits.forEach(function(fruit){
            console.log(fruit.name)
        });
    }
});