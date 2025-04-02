import bcrypt from "bcrypt";


export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(8);
    return bcrypt.hashSync(password, salt);
};

export const comparePassword = (userPassword, recivedPassword) =>{
    return bcrypt.compareSync(recivedPassword, userPassword);
};
