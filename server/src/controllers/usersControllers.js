import Users from "../config/db";
import bcrypt from "bcrypt";


const createUser = async (password, email, name) => {
    try {
        if(!name || !email || !password){
            throw("missing data to create the user")
        }
        else {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const User = await Users.create({
            password: hashedPassword,
            email,
            name
        })
        return User
        }
    }
    catch(error){
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
       }
}


export const updateUsers = async (id_u, name, password, email, photo, mode, check) => {
   try{
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await Users.update({
        password: hashedPassword,
        mode,
        check,
        photo,
        email,
        name
    },
    {where: {id_u}}
    )
    return newUser;
   }
   catch(error){
    fs.appendFile('error.log', error.message + '\n', (err) => {
        if (err) throw err;
    });
    return { error: error.message };
   }
}

export const login = async (email, password) => {
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
        fs.appendFile('error.log', error.message + '\n', (err) => {
            if (err) throw err;
        });
        return { error: error.message };
    }
} 



module.exports = {
    createUser,
    updateUsers,
    login
}
