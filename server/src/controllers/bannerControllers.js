import Banner from "../config/db";
import { getAdmins } from "./administratorasControllers"


// solo para ver el admin
export const isAdmin = async(userId) => {
     
    const admin = await getAdmins();
    const adminIds = admin.map(admins => admins.id)
    return adminIds.includes(userId)
}
export const createBanner = async (img) => {
    try {
        if(!isAdmin){
            throw new Error("You are not authorized")
        }
        if(!img){
            throw new Error("missing img to create the banner");
        }
        else{
            const newBanner = await Banner.create({
                img
            });
            return newBanner;
        }
    }

    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}

export const updateBanner = async (id, img, date ) => {
    try {
        if(!isAdmin){
            throw new Error("You are not authorized")
        }
        const bannerUpdate = await Banner.findByPk(id);
        if(bannerUpdate){
            bannerUpdate.id = id;
            bannerUpdate.img = img;
            bannerUpdate.date = date
            await bannerUpdate.save();
            return bannerUpdate;
        }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }

}

export const getBanner = async () => {
    try{
     
        const banner = await Banner.findAll();
        return banner;
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}

module.exports = {
    getBanner,
    updateBanner,
    createBanner
}