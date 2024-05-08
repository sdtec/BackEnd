import { BoletimNotaRequest } from "../models/interfaces/BoletimNotaRequest";
import prismaClient from "../prisma";

class EditBoletimNotaService {
  async execute(nota: BoletimNotaRequest) {
    const { id, boletim_id, disciplina_id, falta1Bimestre, falta2Bimestre, falta3Bimestre, falta4Bimestre, n11B, n12B, n13B, n14B, n21B, n22B, n23B, n24B, n31B, n32B, n33B, n34B, notaConselhoClasse, notaRecuperacao, rP1B, rP2B, rP3B, rP4B, situacao_id } = nota;

    const boletimExists = await prismaClient.boletim.findFirst({
      where: {
        id: boletim_id,
      },
    });

    if (!boletimExists) {
      throw new Error(`Boletim com ID ${boletim_id} não encontrado.`);
    }

    const boletimNotaEdited = await prismaClient.boletimNota.update({
      where: {
        id: id,
      },
      data: {
        boletim_id: boletim_id,
        disciplina_id: disciplina_id,
        falta1Bimestre: falta1Bimestre,
        falta2Bimestre: falta2Bimestre,
        falta3Bimestre: falta3Bimestre,
        falta4Bimestre: falta4Bimestre,
        n11B: n11B,
        n12B: n12B,
        n13B: n13B,
        n14B: n14B,
        n21B: n21B,
        n22B: n22B,
        n23B: n23B,
        n24B: n24B,
        n31B: n31B,
        n32B: n32B,
        n33B: n33B,
        n34B: n34B,
        notaConselhoClasse: notaConselhoClasse,
        notaRecuperacao: notaRecuperacao,
        rP1B: rP1B,
        rP2B: rP2B,
        rP3B: rP3B,
        rP4B: rP4B,
        situacao_id: situacao_id,
        updated_at: new Date().toISOString(),
      },
    });

    return boletimNotaEdited;
  }
}

class GetEditBoletimNotaService {
  async execute(boletimId: string, bimestre: number) {
    try {
      let notas;

      switch (bimestre) {
        case 1:
          notas = await this.getNotasByBimestre(boletimId, 'falta1Bimestre', 'n11B', 'n21B', 'n31B', 'rP1B');
          break;
        case 2:
          notas = await this.getNotasByBimestre(boletimId, 'falta2Bimestre', 'n12B', 'n22B', 'n32B', 'rP2B');
          break;
        case 3:
          notas = await this.getNotasByBimestre(boletimId, 'falta3Bimestre', 'n13B', 'n23B', 'n33B', 'rP3B');
          break;
        case 4:
          notas = await this.getNotasByBimestre(boletimId, 'falta4Bimestre', 'n14B', 'n24B', 'n34B', 'rP4B');
          break;
        default:
          throw new Error('Bimestre inválido');
      }

      return notas;
    } catch (error) {
      console.error("Error fetching boletim nota:", error);
      throw new Error("Failed to fetch boletim nota");
    }
  }

  private async getNotasByBimestre(boletimId: string, faltaField: string, n1Field: string, n2Field: string, n3Field: string, rPField: string) {
    return await prismaClient.boletimNota.findMany({
      where: {
        boletim_id: boletimId,
      },
      select: {
        id: true,
        boletim_id: true,
        disciplina_id: true,
        Disciplina: true,
        [faltaField]: true,
        [n1Field]: true,
        [n2Field]: true,
        [n3Field]: true,
        [rPField]: true,
        situacao_id: true,
      },
    });
  }
}

class ListBoletimNotaService {
  async execute(boletimId: string) {
    const boletimNota = await prismaClient.boletimNota.findMany({
      where: {
        boletim_id: boletimId,
      },
      select: {
        id: true,
        boletim_id: true,
        disciplina_id: true,
        falta1Bimestre: true,
        falta2Bimestre: true,
        falta3Bimestre: true,
        falta4Bimestre: true,
        n11B: true,
        n12B: true,
        n13B: true,
        n14B: true,
        n21B: true,
        n22B: true,
        n23B: true,
        n24B: true,
        n31B: true,
        n32B: true,
        n33B: true,
        n34B: true,
        notaConselhoClasse: true,
        notaRecuperacao: true,
        rP1B: true,
        rP2B: true,
        rP3B: true,
        rP4B: true,
        Disciplina:true,
        situacao_id: true,
      },
      orderBy: {
       Disciplina : {
        nome: 'asc'
       }
      },
    });
    return boletimNota;
  }
}

export {
  EditBoletimNotaService,
  GetEditBoletimNotaService,
  ListBoletimNotaService,
};
