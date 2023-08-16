import Bedrooms from "../config/db";
import { isAdmin } from "./bannerControllers"


export const createBedroom = async (kind_h, style, gallery, video, virtual_tour, description_h) => {
   try {
    if(!isAdmin){
        throw new Error("You are not authorized")
    }
    if(!kind_h || !style || !gallery || !video || !virtual_tour || !description_h){
       throw new Error("mising date to create new bedroom")
    }
    else {
    const date_h = new Date();
     const newBedroom = await Bedrooms.create({
        kind_h,
        style, 
        gallery, 
        video,
        virtual_tour, 
        description_h,
        date_h
     })
     return newBedroom;
    }
   }
   catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
 }
   }



   const getBedroom = async () => {
     try {
        const bedrooms = await Bedrooms.findAll();
        return bedrooms;
     }
     catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
   }




   const updateBedroom = async (id, kind_h, style, gallery, video, virtual_tour, description_h) => {
    try{
        if(!isAdmin){
            throw new Error("You are not authorized")
        }
        const newBedroom = await Bedrooms.findByPk(id);
        if(newBedroom){
            newBedroom.kind_h = kind_h;
            newBedroom.style = style;
            newBedroom.gallery = gallery
            newBedroom.video = video;
            newBedroom.virtual_tour = virtual_tour;
            newBedroom.description_h = description_h;
            await newBedroom.save();
            return newBedroom;
        }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
   }



   export const deleteBedroom = async(id) => {
    try{
        if(!isAdmin){
            throw new Error("You are not authorized")
        }
       const bedroom = await Bedrooms.findByPk(id);
       if(bedroom){
        await bedroom.destroy();
       }
       else {
        throw new Error("Bedroom not found");
    }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
   } 

  module.exports = {
    deleteBedroom,
    updateBedroom,
    getBedroom,
    createBedroom
  }