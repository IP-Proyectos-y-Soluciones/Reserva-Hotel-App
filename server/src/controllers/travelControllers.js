const {Travel} = require('../config/db')
const fs = require('fs')
const { getAdmins } = require("./administratorasControllers.js");


const isAdmin = async (userId) => {
  const admin = await getAdmins();
  const adminIds = admin.map(admins => admins.id);
  return adminIds.includes(userId);
};


const createTravel = async (photo_small, big_photo, title, description) => {
  try {

    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const travel = await Travel.create({
      photo_small,
      big_photo,
      title,
      description,
    });
    return travel;
  } 

  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}

const updateTravel = async (id, photo_small, big_photo, title, description) => {
  try {

    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const [updated] = await Travel.update(
      {
        photo_small,
        big_photo,
        title,
        description,
      },
      { where: { id: id } }
    );
    if (updated) {

      const updatedTravel = await Travel.findOne({ where: { id: id } });
      return updatedTravel;
    }

    throw new Error('Travel not found');
  } 

  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
};

const deleteTravel = async (id) => {
  try {
    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const deleted = await Travel.destroy({ where: { id: id } });
    if (deleted) {


      return { message: 'Travel deleted successfully' };
    }

    throw new Error('Travel not found');
  } 
  
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}


const getAllTravels = async () => {
  try {
    const travels = await Travel.findAll();
    return travels;
  } 
  catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
 
}

module.exports = {
    getAllTravels,
    deleteTravel,
    updateTravel,
    createTravel

}