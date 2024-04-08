import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { LocationModel } from "./models/Locations.js";
const app = express();

//middleware
app.use(cors())
app.use(express.json())


//mongo connection
main().catch((err) => console.log(err, "mongo error"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/locations-app");
  console.log("MONGO connection open");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Example API Routes
const router = express.Router();

// GET route for all locations
router.get('/', async (req, res) => {
  try {
    const locations = await LocationModel.find(); 
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route for new location
router.post('/new-location', async (req, res) => {
  console.log(`REQ: ${req}`)
  const location = new LocationModel({
    author: req.body.author,
    description: req.body.description,
    image: req.body.image,
    title: req.body.title
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE route for deleting a location
router.delete('/locations/:id', async (req, res) => {
  const { id } = req.params;
console.log("rEACHED ROUTE")
  try {
    const deletedLocation = await LocationModel.findByIdAndDelete(id);

    if (!deletedLocation) {
      return res.status(404).json({ message: 'Location not found' });
    }

    res.status(200).json({ message: 'Location deleted successfully', deletedLocation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get route for details page
router.get("/locations/:id",async (req,res)=>{
  const {id}=req.params;
  
  try {
    const location = await LocationModel.findById(id); 
    console.log(location)
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// PUT route for edit location
router.put('/locations/:id', async (req, res) => {

  const {id}=req.params;
  console.log("edit put route")
  try {
   const location = await LocationModel.findByIdAndUpdate(id, req.body, { new: true })
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    
  res.status(201).json(location);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get route-> for edit page - not necessary
// router.get("/locations/:id/edit",async (req,res)=>{
//   const {id}=req.params;
//   console.log("edit get route")
//   try {
//     const location = await LocationModel.findById(id); 
//     console.log(location)
//     res.json(location);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// })

// Register the router
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

