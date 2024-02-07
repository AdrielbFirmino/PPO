import authService from "./auth.service.js";
import bcrypt from "bcrypt";
import userRepositories from "../repositories/user.repositories.js";

async function createUserService(body) {
    const { name, username, email, password, avatar, } = body

    if (!username || !name || !email || !password || !avatar)
        throw new Error("Submit all fields for registration");

    const foundUser = await userRepositories.findByEmailUserRepository(email);

    if (foundUser) throw new Error("User already exists");

    const user = await userRepositories.createUserRepository(body);

    if (!user) throw new Error("Error creating User");

    const token = authService.generateToken(user.id);

    return {
        user: {
            id: user.id,
            name,
            username,
            email,
            avatar
        },
        token
    };
};

async function findAllUserService() {
    const users = await userRepositories.findAllUserRepository();

    if (users.length === 0) throw new Error("There are no registered users");

    return users;
}

async function findUserByIdService(userIdParam, userIdLogged) {
    let idParam;
    if (!userIdParam) {
        userIdParam = userIdLogged;
        idParam = userIdParam;
    } else {
        idParam = userIdParam;
    }
    if (!idParam)
        throw new Error("Send an id in the parameters to search for the user");

    const user = await userRepositories.findByIdUserRepository(idParam);

    if (!user) throw new Error("User not found");

    return user;
}

async function updateUserService({ name, username, email, password, avatar },
    userId,
    userIdLogged) {

        if (!name && !username && !email && !password && !avatar)
        throw new Error("Submit at least one field to update the user");
    
      const user = await userRepositories.findByIdUserRepository(userId);
    
      if (user._id != userIdLogged) throw new Error("You cannot update this user");
    
      if (password) password = await bcrypt.hash(password, 10);
    
      await userRepositories.updateUserRepository(
        userId,
        name,
        username,
        email,
        password,
        avatar
      );
    
      return { message: "User successfully updated!" };
}

export default {
    createUserService,
    findAllUserService,
    findUserByIdService,
    updateUserService,
};