import Administratoras from "../config/db"
import bcrypt from 'bcrypt';

// crear nuveo admin
export const createAdmin = async (profile, name, user, password, status) => {
   
   try{
    if(!name || !user || !password){
        throw("missing data to create the admin")
    }
    else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newAdmin = await Administratoras.create({
            profile,
            name,
            user,
            password: hashedPassword,
            status
        });
        return newAdmin;
    }
}
   catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}

// ver todos los administratoras en una lista
export const getAdmins = async () => {
    try{
        const admins = await Administratoras.findAll();
        return admins
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}


// update Admin
export const updateAdmin = async (id ,profile, name, user, password, status) => {

    try {
        const admin = await Administratoras.findByPk(id);
        if(admin){
            admin.profile = profile;
            admin.name = name;
            admin.user = user;
            admin.password = password;
            admin.status = status
            await admin.save();
            return admin;
        }
        else {
            throw new Error("Admin not found");
        }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}

// delete Admin
export const DeleteAdmin = async (id) => {
    try {
        const admin = await Administratoras.findByPk(id);
        if(admin){
            await admin.destroy();
        }
        else {
            throw new Error("Admin not found");
        }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
}
export const loginAdmin = async (user, password) => {
    try {
        const admin = await Administratoras.findOne({ where: { user } });
        if (admin) {
            const isValidPassword = await bcrypt.compare(password, admin.password);
            if (isValidPassword) {
                return { success: true };
            } else {
                throw new Error("Invalid password");
            }
        } else {

            throw new Error("Admin not found");
        }
    } catch (error) {
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
} 


module.exports = {
    DeleteAdmin,
    updateAdmin,
    getAdmins,
    createAdmin,
    loginAdmin
}