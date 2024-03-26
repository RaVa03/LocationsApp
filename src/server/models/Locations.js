import mongoose from "mongoose";
const locationSchema = new mongoose.Schema({
    author: String,
    description: String,
    image: String,
    title: String
})
export const LocationModel=mongoose.model("Locations",locationSchema)