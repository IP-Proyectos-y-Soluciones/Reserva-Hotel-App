const { Bedrooms } = require("../config/db");




const createBedroom = async (
    kind_h,
    style,
    gallery,
    description_h
  ) => {
    try {

      if (!kind_h) {
        throw new Error("Missing data to create a new bedroom");
      } else {
        const date_h = new Date();
        const newBedroom = await Bedrooms.create({
          kind_h,
          style,
          gallery,
          description_h,
          date_h
        });
        return newBedroom;
      }
    } catch (error) {
      console.error(error)
      return { error: error.message };
    }
  };
  
  const getBedrooms = async () => {
    try {
      const bedrooms = await Bedrooms.findAll();
      return bedrooms;
    } catch (error) {
      console.error(error)
      return { error: error.message };
    }
  };
  
  const updateBedroom = async (  id, kind_h, style, gallery, description_h) => {
    try {

   
      const bedroomUp = await Bedrooms.findByPk(id);
      if (bedroomUp) {
        bedroomUp.kind_h = kind_h;
        bedroomUp.style = style;
        bedroomUp.gallery = gallery;
        bedroomUp.description_h = description_h;
        await bedroomUp.save();
        return bedroomUp;
      }
    } 
    catch (error) {
    
      return { error: error.message };
    }
  };
  
  const deleteBedroom = async (id) => {
    try {
      const bedroom = await Bedrooms.findOne({
        where: {
          id: id
        }
      });
  
      if (!bedroom) {
        throw new Error("Bedroom not found");
      }
  
      await bedroom.destroy();
      return { success: true };
  
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