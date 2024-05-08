import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { CreateUserRequest } from "../../models/interfaces/user/CreateUserRequest";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { nome, email, senha }: CreateUserRequest = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ nome, email, senha });
    return response.json(user);
  }
}

export { CreateUserController };
