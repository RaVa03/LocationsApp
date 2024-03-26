import mongoose from "mongoose";	
import {LocationModel} from "./models/Locations.js"
//we require the model
main().catch((err) => console.log(err, "mongo error"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/locations-app");
  console.log("MONGO connection open");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const seedLocations=[
    {
        author:"Eric",
        description:"haha",
        image:"https://images.unsplash.com/photo-1708779724414-33dae2657c6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxocHUzaVFhNENLVXx8ZW58MHx8fHx8",
        title:"Kulu Mountain",
    },
    {
        author:"Anne",
        description:"so dark",
        image:"https://images.unsplash.com/photo-1708779724414-33dae2657c6e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxocHUzaVFhNENLVXx8ZW58MHx8fHx8",
        title:"Moy Mountain",
    },
]
LocationModel.insertMany(seedLocations)
.then((res) => {
  console.log(res);
})
.catch((e) => {
  console.log(e);
});
//to know: inainte de a fi introduse in db vor fi validate
//daca e eroare nu se introduce nimic