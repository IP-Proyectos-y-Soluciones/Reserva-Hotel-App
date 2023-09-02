const fs = require( 'fs' );
const { Users, Testimonials, Bookings } = require( '../config/db' );
const bcrypt = require( 'bcryptjs' );

const createUser = async (password, email, name, photo, mode, check, encrypted_email) => {
  try {
    if (!name || !email || !password ) {
      throw new Error("Missing data to create the user"); // Se arregla el formato de error
    } else {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const User = await Users.create({
        password: hashedPassword,
        email,
        name,
        photo,
        mode,
        encrypted_email
      });
      return User;
    }
  } catch (error) {
    fs.appendFile("error.log", error.message + "\n", err => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

const updateUsers = async (id, name, password, email, photo, mode, encrypted_email) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await Users.update(
      {
        password: hashedPassword,
        mode,
        photo,
        email,
        name,
        encrypted_email
      },
      { where: { id } }
    );
    return newUser;
  } catch (error) {
    fs.appendFile("error.log", error.message + "\n", err => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

const login = async (email, password) => {
  try {
    const user = await Users.findOne({ where: { email } });
    if (user) {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        return { success: true };
      } else {
        throw new Error("Invalid password");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    fs.appendFile("error.log", error.message + "\n", err => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};

const getUsers = async () => {
  try {
    const users = await Users.findAll();
    // const users = await Users.findAll({
    //   include: [
    //     {
    //       model: Testimonials,
    //       attributes: ['testimony']
    //     }
    //   ]
    // });
    return users;
  } catch (error) {
    fs.appendFile("error.log", error.message + "\n", err => {
      if (err) throw err;
    });
    return { error: error.message };
  }
};


module.exports = {
  createUser,
  updateUsers,
  login,
  getUsers
}