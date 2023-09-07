const bcrypt = require('bcrypt');
const { Administrators } = require("./db")
require("dotenv").config();

const createDefaultAdmin = async () => {
    const defaultAdminData = {
        profile: 'admin',
        name: 'Bladimir Parra',
        user: process.env.ADMIN_USER,
        password: process.env.ADMIN_PASSWORD,
        status: 'active',
    };

    const existingAdmin = await Administrators.findOne({
        where: { user: defaultAdminData.user }
    });

    if (!existingAdmin) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(defaultAdminData.password, saltRounds);
        defaultAdminData.password = hashedPassword;

        await Administrators.create(defaultAdminData);
        console.log('Usuario administrador predeterminado creado con éxito.');
    } else {
        console.log('El usuario administrador predeterminado ya existe en la base de datos.');
    }
};

module.exports = createDefaultAdmin;
