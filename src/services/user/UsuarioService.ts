import { hash } from "bcryptjs";
import { UsuarioRequest } from "../../models/interfaces/user/UsuarioRequest";
import prismaClient from "../../prisma";
class EditUsuarioService {
  async execute({ nome, id, email, senha }: UsuarioRequest) {
    const userExists = await prismaClient.usuario.findFirst({
      where: {
        id: id,
      },
    });

    if (!userExists) {
      throw new Error("Usuário não encontrada!");
    }
    const passwordHash = await hash(senha, 8);
    const userEdited = await prismaClient.usuario.update({
      where: {
        id: id,
      },
      data: {
        nome: nome,
        email: email,
        senha: passwordHash,
        updated_at: new Date().toISOString(),
      },
    });
    return userEdited;
  }
}

class getEditUsuarioService {
  async execute(userId: string) {
    const user = await prismaClient.usuario.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  }
  catch(error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user");
  }
}

class ListUsuarioService {
  async execute() {
    const user = await prismaClient.usuario.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });
    return user;
  }
}

export { ListUsuarioService, getEditUsuarioService, EditUsuarioService };
