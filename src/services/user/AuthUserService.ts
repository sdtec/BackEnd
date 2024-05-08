import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { AuthUserRequest } from "../../models/interfaces/user/AuthUserRequest";

class AuthUserService {
  async execute({ email, senha }: AuthUserRequest) {
    if (!email) {
      throw new Error("Campo email precisa ser preenchido!");
    }

    if (!senha) {
      throw new Error("Campo senha precisa ser preenchido!");
    }
    if (email != null && senha != null) {
    const user = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error("Email ou senha incorretos!");
    }

    const passwordMatch = await compare(senha, user?.senha);

    if (!passwordMatch) {
      throw new Error("Senha incorreta!");
    }

    const token = sign(
      {
        nome: user?.nome,
        email: user?.email,
      },
      process.env.JWT_SECRET as string,
      {
        subject: user?.id,
        expiresIn: "1h",
      }
    );
   
      return {
        id: user?.id,
        nome: user?.nome,
        email: user?.email,
        token: token,
      }; 
    } 
  }
}

export { AuthUserService };
