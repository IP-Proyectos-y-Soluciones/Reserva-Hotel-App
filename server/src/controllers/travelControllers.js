const {Travel} = require('../config/db')
const fs = require('fs')

const createTravel = async (photo_small, big_photo, title, description) => {
  try {

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

const getTravel = async (id) => {
  try {

    const travel = await Travel.findOne({ where: { id: id } });
    if (travel) {

      return travel;
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
    getTravel,
    deleteTravel,
    updateTravel,
    createTravel

}