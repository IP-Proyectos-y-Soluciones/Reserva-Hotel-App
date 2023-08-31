const { Service } = require('../config/db')
const fs = require('fs')
const { getAdmins } = require("./administratorasControllers.js");


const isAdmin = async (userId) => {
  const admin = await getAdmins();
  const adminIds = admin.map(admins => admins.id);
  return adminIds.includes(userId);
};


const createService = async (photo_small, big_photo, title, description) => {
  try {

    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const service = await Service.create({
      photo_small,
      big_photo,
      title,
      description,
    });
    return service;
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}

const updateService = async (id, photo_small, big_photo, title, description) => {
  try {

    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const [updated] = await Service.update(
      {
        photo_small,
        big_photo,
        title,
        description,
      },
      { where: { id: id } }
    );
    if (updated) {

      const updatedService = await Service.findOne({ where: { id: id } });
      return updatedService;
    }

    throw new Error('Travel not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

const deleteService = async (id) => {
  try {
    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const deleted = await Service.destroy({ where: { id: id } });
    if (deleted) {


      return { message: 'Service deleted successfully' };
    }

    throw new Error('Service not found');
  }

  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
}


const getAllServices = async () => {
  try {
    const services = await Service.findAll();
    return services;
  }
  catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }

}

module.exports = {
  getAllServices,
  deleteService,
  updateService,
  createService

}