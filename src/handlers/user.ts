import { Request, Response, NextFunction } from "express";
import UserController from  "../controllers/user";
import UserService from "../db/user"; 

const userController = new UserController(UserService);

class UserHttpHandler{
    async getUsers(request: Request, response: Response, next: NextFunction){ // La función next es para pasar a la siguiente función 
        try{
            const users = await userController.getAllUsers();
            response.json(users);
        } catch(error){
            next(error);
        }
    }

    async getUserById(request: Request, response: Response, next: NextFunction){

    }

    async updateUser(request: Request, response: Response, next: NextFunction){

    }

    async deleteUser(request: Request, response: Response, next: NextFunction){

    }
}


export default UserHttpHandler;