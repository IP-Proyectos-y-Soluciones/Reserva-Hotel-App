const { Banner } = require("../config/db");
const { getAdmins } = require("./administratorasControllers.js");

// Solo para ver el administrador
const isAdmin = async (userId) => {
  const admin = await getAdmins();
  const adminIds = admin.map(admins => admins.id);
  return adminIds.includes(userId);
};

 const createBanner = async (img) => {
  try {
    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    if (!img) {
      throw new Error("Falta la imagen para crear el banner");
    } else {
      const newBanner = await Banner.create({
        img
      });
      return newBanner;
    }
  } catch (error) {
   
    return { error: error.message };
  }
};

const updateBanner = async (id, img, date) => {
  try {
    if (!isAdmin) {
      throw new Error("No estás autorizado");
    }
    const bannerUpdate = await Banner.findByPk(id);
    if (bannerUpdate) {
      bannerUpdate.id = id;
      bannerUpdate.img = img;
      bannerUpdate.date = date;
      await bannerUpdate.save();
      return bannerUpdate;
    }
  } catch (error) {
  
    return { error: error.message };
  }
};

 const getBanner = async () => {
  try {
    const banner = await Banner.findAll();
    return banner;
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

module.exports = {
  getBanner,
  updateBanner,
  createBanner,
  isAdmin
}