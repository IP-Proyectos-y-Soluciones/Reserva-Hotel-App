const { Bedrooms } = require("../config/db");
const { getAdmins } = require("./administratorasControllers.js");


const isAdmin = async (userId) => {
    const admin = await getAdmins();
    const adminIds = admin.map(admins => admins.id);
    return adminIds.includes(userId);
  };

const createBedroom = async (
    kind_h,
    style,
    gallery,
    video,
    virtual_tour,
    description_h
  ) => {
    try {
      if (!isAdmin()) {
        throw new Error("You are not authorized");
      }
      if (!kind_h || !style || !gallery || !video || !virtual_tour || !description_h) {
        throw new Error("Missing data to create a new bedroom");
      } else {
        const date_h = new Date();
        const newBedroom = await Bedrooms.create({
          kind_h,
          style,
          gallery,
          video,
          virtual_tour,
          description_h,
          date_h
        });
        return newBedroom;
      }
    } catch (error) {
      
      return { error: error.message };
    }
  };
  
  const getBedrooms = async () => {
    try {
      const bedrooms = await Bedrooms.findAll();
      return bedrooms;
    } catch (error) {
      fs.appendFile("error.log", error.message + "\n", err => {
        if (err) throw err;
      });
      return { error: error.message };
    }
  };
  
  const updateBedroom = async (
    id,
    kind_h,
    style,
    gallery,
    video,
    virtual_tour,
    description_h
  ) => {
    try {
      if (!isAdmin) {
        throw new Error("You are not authorized");
      }
      const bedroomUp = await Bedrooms.findByPk(id);
      if (bedroomUp) {
        bedroomUp.kind_h = kind_h;
        bedroomUp.style = style;
        bedroomUp.gallery = gallery;
        bedroomUp.video = video;
        bedroomUp.virtual_tour = virtual_tour;
        bedroomUp.description_h = description_h;
        await bedroomUp.save();
        return bedroomUp;
      }
    } catch (error) {
    
      return { error: error.message };
    }
  };
  
  const deleteBedroom = async id => {
    try {
      if (!isAdmin) {
        throw new Error("You are not authorized");
      }
      const bedroom = await Bedrooms.findByPk(id);
      if (bedroom) {
        await bedroom.destroy();
      } else {
        throw new Error("Bedroom not found");
      }
    } catch (error) {
    
      return { error: error.message };
    }
  };
  const getBedroomById = async (id) => {
    try {
      const bedroom = await Bedrooms.findByPk(id);
      if (!bedroom) {
        throw new Error("Bedroom not found");
      }
      return bedroom;
    } catch (error) {
      return { error: error.message };
    }
  };

  module.exports = {
    getBedrooms,
    createBedroom,
    updateBedroom,
    deleteBedroom,
    getBedroomById
  }