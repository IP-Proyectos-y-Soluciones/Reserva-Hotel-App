const bcrypt = require('bcrypt'); 
const { Administrators } = require("../config/db")

const createAdmin = async (profile, name, user, password, status) => {
    try {
      if (!name || !user || !password) {
        throw new Error("Faltan datos para crear el administrador");
      } else {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
  
        const newAdmin = await Administrators.create({
          profile,
          name,
          user,
          password: hashedPassword,
          status
        });
        
        return newAdmin;
      }
    } catch (error) {
    
      console.error(error)
    }
};


// Obtener todos los administradores en una lista
const getAdmins = async () => {
  try {
    const admins = await Administrators.findAll();
    
    return admins;
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

// Actualizar administrador
const updateAdmin = async (id, profile, name, user, password, status) => {
  try {
    const admin = await Administrators.findByPk(id);
    if (admin) {
      admin.profile = profile;
      admin.name = name;
      admin.user = user;
      admin.status = status;

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        admin.password = hashedPassword;
      }

      await admin.save();
      return admin;
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};


// Eliminar administrador
const deleteAdmin = async (id) => {
  try {
    const admin = await Administrators.findOne({
      where: {
        id: id
      }
    });
    
    if (admin) {
      await admin.destroy();
      return { message: 'Admin silindi' };
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
   
    return { error: error.message };
  }
};

// Iniciar sesión
 const login = async (user, password) => {
  try {
    const admin = await Administrators.findOne({ where: { user } });
    if (admin) {
      const isValidPassword = await bcrypt.compare(password, admin.password);
      if (isValidPassword) {
        return { admin, success: true };
      } else {
        throw new Error("El usuario o la contraseña son incorrectos");
      }
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
   
    return { error: error.message };
  }
};


const getAdminById = async (id) => {
  try {
    const admin = await Administrators.findByPk(id);
    return admin;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

module.exports = {
  login,
  deleteAdmin,
  updateAdmin,
  createAdmin,
  getAdmins,
  getAdminById,
  logout
}