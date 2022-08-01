const express = require("express");

const app = express();

const connectDB = require("./config/connectDB");
connectDB()

app.use(express.json())

const Person = require("./model/Person")

/***********************Create_and_Save_a_Record_of_a_Model***********************************/
// Person.insertMany([{
  //   name:"Alaa Bsaihia",
    // age:28,
    // favoriteFoods:["Lasagne","Couscous","Pizza"]
 //}]).then( insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});
/*********************************************************************************************/


/***********************Create_Many_Records_with_model.create()*******************************/
 //Person.create([
   //  {
     //    name:"Rafaa Ben Doudou",
       //  age:26,
         //favoriteFoods:["Riz","Pizza"]
     //},
    // {
      //   name:"Iyed Bsaihia",
        // age:21,
         //favoriteFoods:["Frites","Makloub tounsi"]
     //},
     //{
       //  name:"Issam Mathlouthi",
        // age:31,
         //favoriteFoods:["Pizza","Chawarma"]
     //}
 //]).then(insertedElement => {console.log("The Inserted Elemenmt: ",insertedElement)});
/*********************************************************************************************/


/*********************Use_model.find()_to_Search_Your_Database********************************/
// Person.find().then(remainingPerson => {console.log(remainingPerson)});
/*********************************************************************************************/


/********************************Use_model.findOne()******************************************/
// Person.findOne().then(remainingPerson => {console.log(remainingPerson)});
/*********************************************************************************************/


/******************************Use_model.findById()*******************************************/
// let id = "62e7b6dc1f0953cacfd5d29d"; //just exemple 
// Person.findById(id, function (err, docs) {console.log(docs)});
/*********************************************************************************************/


/**********************************model.findOneAndUpdate()***********************************/
// Person.findOneAndUpdate({"name":"Alaa Bsaihia"},{$set:{age:"30"}})
// .then(updatedPerson => {console.log("Updated Person: ",updatedPerson)});
/*********************************************************************************************/


/***********************************model.findByIdAndRemove()*********************************/
// let id = "62e7bb499b7eaf6c6e85d6d5"; //just exemple 
// Person.findByIdAndRemove(id, function (err, docs) {console.log("Removed Person :",docs)});
/*********************************************************************************************/


/***************************************model.remove()****************************************/
// Person.remove({name:"Alaa Bsaihia"})
// .then(removedPersons => {console.log("Removed Person :",removedPersons)});
/*********************************************************************************************/

const PORT = 4000;

app.listen(PORT, (err)=>{
    err
    ?console.log(err) 
    :console.log(`The Server is Running ${PORT}...`);
});