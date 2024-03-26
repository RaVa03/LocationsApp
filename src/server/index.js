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

// Define a GET route
router.get('/', async (req, res) => {
  try {
    // Retrieve locations from MongoDB
    const locations = await LocationModel.find(); // LocationModel is the Mongoose model
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Define a POST route
router.post('/new-location', async (req, res) => {
  console.log(`REQ: ${req}`)
  const location = new LocationModel({// LocationModel is the Mongoose model
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

// Register the router
app.use('/', router);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
