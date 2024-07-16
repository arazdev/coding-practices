const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Fruits", { useNewURLParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name!"]
    },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name:"Apple",
  rating: 9,
  review: "Great Fruits everywhere"
});



const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const Mango = new Fruit({
  name:"Mango",
  rating: 9,
  review: "Great Fruits everywhere"
});

Mango.save();

Person.updateOne({_id:"62fe5e9e15f7fac3133b7e92"}, {favouriteFruit: Mango}, function(err){
  if (err){
    console.log("err");
  }else{
    console.log("Updated");
  }
 });

// const person = new Person({
//   name: "Oggy",
//   age: 20,
//   favouriteFruit: Pineapple
// });





// person.save();


Fruit.find(function(err, fruits){
  if (err){
    console.log("err");
  }else{

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    })
  }
});

// Fruit.updateOne({_id:"62fe4f02240ff0d9962d98f9"},{name:"Peach"}, function(err){
//   if(err){
//     console.log("err");
//   }else{
//     console.log("Successfully updated");
//   }
// });

// Person.deleteMany({name: "Araz"}, function(err){
//   if(err){
//     console.log("err");
//   }else{
//     console.log("Successfully deleted");
//   }
// });






