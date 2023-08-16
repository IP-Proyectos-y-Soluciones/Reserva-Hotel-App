import Administrators from "../config/db.js";
import bcrypt from 'bcrypt';
import fs from 'fs';

// Crear un nuevo administrador
export const createAdmin = async (profile, name, user, password, status) => {
  try {
    if (!name || !user || !password) {
      throw new Error("Faltan datos para crear el administrador");
    } else {
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
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

// Obtener todos los administradores en una lista
export const getAdmins = async () => {
  try {
    const admins = await Administratoras.findAll();
    return admins;
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

// Actualizar administrador
export const updateAdmin = async (id, profile, name, user, password, status) => {
  try {
    const admin = await Administratoras.findByPk(id);
    if (admin) {
      admin.profile = profile;
      admin.name = name;
      admin.user = user;
      admin.password = password;
      admin.status = status;
      await admin.save();
      return admin;
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

// Eliminar administrador
export const deleteAdmin = async (id) => {
  try {
    const admin = await Administratoras.findByPk(id);
    if (admin) {
      await admin.destroy();
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

// Iniciar sesión
export const login = async (user, password) => {
  try {
    const admin = await Administratoras.findOne({ where: { user } });
    if (admin) {
      const isValidPassword = await bcrypt.compare(password, admin.password);
      if (isValidPassword) {
        return { success: true };
      } else {
        throw new Error("Contraseña inválida");
      }
    } else {
      throw new Error("Administrador no encontrado");
    }
  } catch (error) {
    fs.appendFile('error.log', error.message + '\n', (err) => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

