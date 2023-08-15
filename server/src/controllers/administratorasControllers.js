import Administratoras from "../config/db"

// crear nuveo admin
export const createAdmin = async (profile, name, user, password, status) => {
   
   try{
    if(!name || !user || !password){
        throw("missing data to create the admin")
    }
    else {
        const newAdmin = await Administratoras.create({
            profile,
            name,
            user, 
            password,
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
export const listAdmins = async () => {
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
        if(id){
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


