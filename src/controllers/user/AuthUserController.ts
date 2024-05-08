import { Request, Response } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";
import { AuthUserRequest } from "../../models/interfaces/user/AuthUserRequest";

class AuthUserController {
  async handle(request: Request, response: Response) {
    const { email, senha }: AuthUserRequest = request.body;
    const authUserService = new AuthUserService();
    try {
      const auth = await authUserService.execute({
        email,
        senha,
      });
      return response.json(auth);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}

export { AuthUserController };
