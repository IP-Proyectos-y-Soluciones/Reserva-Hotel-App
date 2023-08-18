const { Restaurant } = require('../config/db')
const fs = require('fs')

const createRestaurant = async (img, description) => {
  try {
    const restaurant = await Restaurant.create({
      img,
      description,
    });

    return restaurant;

  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const updateRestaurant = async (id, img, description) => {
  try {

    const [updated] = await Restaurant.update(
      {
        img,
        description,
      },
      { where: { id: id } }
    );

    if (updated) {
      const updatedRestaurant = await Restaurant.findOne({ where: { id: id } });

      return updatedRestaurant;
    }

    throw new Error('Restaurant not found');
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const deleteRestaurant = async (id) => {

  try {
    const deleted = await Restaurant.destroy({ where: { id: id } });
    if (deleted) {

      return { message: 'Restaurant deleted successfully' };
    }

    throw new Error('Restaurant not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const getRestaurant = async (id) => {
  try {


    const restaurant = await Restaurant.findOne({ where: { id: id } });
    if (restaurant) {

      return restaurant;
    }
    throw new Error('Restaurant not found');
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

}

const getAllRestaurants = async () => {
  try {
    const restaurants = await Restaurant.findAll();
    return restaurants;
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}


module.exports = {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  updateRestaurant,
  createRestaurant
}