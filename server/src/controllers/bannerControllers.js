const { Banner } = require("../config/db");



 const createBanner = async (img) => {
  try {
    if (!img) {
      throw new Error("Falta la imagen para crear el banner");
    } else {
      const newBanner = await Banner.create({
        img
      });
      return newBanner;
    }
  } catch (error) {
   console.error(error)
    return { error: error.message };
  }
};

const updateBanner = async (id, img) => {
  try {
    const bannerUpdate = await Banner.findByPk(id);
    if (bannerUpdate) {
      bannerUpdate.id = id;
      bannerUpdate.img = img;
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
    
    return { error: error.message };
  }
};

const deleteBanner = async (id) => {
  try {
    const banners = await Banner.findOne({
      where: {
        id: id
      }
    });
    
    if (banners) {
      await banners.destroy();
      return { message: 'Banner eliminado' };
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
   
    return { error: error.message };
  }
};


module.exports = {
  getBanner,
  updateBanner,
  createBanner,
  deleteBanner
}
