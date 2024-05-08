import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { CreateUserRequest } from "../../models/interfaces/user/CreateUserRequest";

class CreateUserService {
  async execute({ nome, email, senha }: CreateUserRequest) {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await prismaClient.usuario.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Email already exists");
    }

    // Encriptando a nossa senha do usuário
    const passwordHash = await hash(senha, 8);

    // Criando nosso usuário
    const user = prismaClient.usuario.create({
      data: {
        nome: nome,
        email: email,
        senha: passwordHash,
      },
      select: {
        id: true,
        nome: true,
        email: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
