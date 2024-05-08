import { Request, Response } from "express";
import {
  CreateAlunoRequest,
  EditAlunoRequest,
} from "../models/interfaces/AlunoRequest";
import {
  CreateAlunoService,
  EditAlunoService,
  GetEditAlunoService,
  ListAlunoService,
} from "../services/AlunoService";

class CreateAlunoController {
  async handle(request: Request, response: Response) {
    const {
      nome,
      foto,
      cpf,
      numeroNIS,
      rg,
      orgaoExpedidorRg,
      dataNascimento,
      email,
      telefoneResidencia,
      telefoneFixo,
      resideOutros,
      escolaAnterior,
      consideracaoFamiliar, 
      cor_id,
      genero_id,
      cidade_id,
      estado_id,
      nacionalidade_id,
      nomeMae,
      cpfMae,
      rgMae,
      orgaoExpedidorRgMae,
      dataNascimentoMae,
      resideMae,
      profissaoMae,
      trabalhoMae,
      telefoneTrabalhoMae,
      nomePai,
      cpfPai,
      rgPai,
      orgaoExpedidorRgPai,
      dataNascimentoPai,
      residePai,
      profissaoPai,
      trabalhoPai,
      telefoneTrabalhoPai,
      acompanhamentoEspecialista,
      acompanhamentoEspecialistaPergunta,
      alergiaMedicamento,
      alergiaMedicamentoPergunta,
      asma,
      avisarNome1,
      avisarNome2,
      diabetes,
      diabetesInsulina,
      doencaCatapora,
      doencaCaxumba,
      doencaCongenita,
      doencaCoqueluche,
      doencaOutro,
      doencaRubeola,
      doencaSarampo,
      epilepsia,
      epilepsiaTratamento,
      hipertensao,
      medicacaoEspecifica,
      medicacaoEspecificaPergunta,
      necessidadeAuditiva,
      necessidadeAutismo,
      necessidadeClinica,
      necessidadeClinicaEndereco,
      necessidadeClinicaTelefone,
      necessidadeMotora,
      necessidadeSindromeDown,
      necessidadeTDA,
      necessidadeTDAH,
      necessidadeTDO,
      necessidadeVisual,
      parentesco1,
      parentesco2,
      parentescoTelefone1,
      parentescoTelefone2,
      planoSaude,
      planoSaudePergunta,
      tratamentoMedico,
      tratamentoMedicoPergunta,
      ativo,
    }: CreateAlunoRequest = request.body;

    const createAlunoService = new CreateAlunoService();
    try {
      const aluno = await createAlunoService.execute({
        nome,
        foto,
        cpf,
        numeroNIS,
        rg,
        orgaoExpedidorRg,
        dataNascimento,
        email,
        telefoneResidencia,
        telefoneFixo,
        resideOutros,
        escolaAnterior,
        consideracaoFamiliar,
        cor_id,
        genero_id,
        cidade_id,
        estado_id,
        nacionalidade_id,
        nomeMae,
        cpfMae,
        rgMae,
        orgaoExpedidorRgMae,
        dataNascimentoMae,
        resideMae,
        profissaoMae,
        trabalhoMae,
        telefoneTrabalhoMae,
        nomePai,
        cpfPai,
        rgPai,
        orgaoExpedidorRgPai,
        dataNascimentoPai,
        residePai,
        profissaoPai,
        trabalhoPai,
        telefoneTrabalhoPai,
        acompanhamentoEspecialista,
        acompanhamentoEspecialistaPergunta,
        alergiaMedicamento,
        alergiaMedicamentoPergunta,
        asma,
        avisarNome1,
        avisarNome2,
        diabetes,
        diabetesInsulina,
        doencaCatapora,
        doencaCaxumba,
        doencaCongenita,
        doencaCoqueluche,
        doencaOutro,
        doencaRubeola,
        doencaSarampo,
        epilepsia,
        epilepsiaTratamento,
        hipertensao,
        medicacaoEspecifica,
        medicacaoEspecificaPergunta,
        necessidadeAuditiva,
        necessidadeAutismo,
        necessidadeClinica,
        necessidadeClinicaEndereco, 
        necessidadeClinicaTelefone,
        necessidadeMotora,
        necessidadeSindromeDown,
        necessidadeTDA,
        necessidadeTDAH, 
        necessidadeTDO,
        necessidadeVisual,
        parentesco1,
        parentesco2,
        parentescoTelefone1,
        parentescoTelefone2,
        planoSaude,
        planoSaudePergunta,
        tratamentoMedico,
        tratamentoMedicoPergunta,
        ativo,
      });
      return response.status(201).json("Sucesso ao adicionar dados de aluno!");
    } catch (error) {
      console.log(error);
      return response
        .status(400)
        .json(
          (error =
            "Erro ao adicionar dados de aluno, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class EditAlunoController {
  async handle(request: Request, response: Response) {
    const {
      id,
      nome,
      foto,
      cpf,
      numeroNIS,
      rg,
      orgaoExpedidorRg,
      dataNascimento,
      email,
      telefoneResidencia,
      telefoneFixo,
      resideOutros,
      escolaAnterior,
      consideracaoFamiliar,
      cor_id,
      genero_id,
      cidade_id,
      estado_id,
      nacionalidade_id,
      nomeMae,
      cpfMae,
      rgMae,
      orgaoExpedidorRgMae,
      dataNascimentoMae,
      resideMae,
      profissaoMae,
      trabalhoMae,
      telefoneTrabalhoMae,
      nomePai,
      cpfPai,
      rgPai,
      orgaoExpedidorRgPai,
      dataNascimentoPai,
      residePai,
      profissaoPai,
      trabalhoPai,
      telefoneTrabalhoPai,
      acompanhamentoEspecialista,
      acompanhamentoEspecialistaPergunta,
      alergiaMedicamento,
      alergiaMedicamentoPergunta,
      asma,
      avisarNome1,
      avisarNome2,
      diabetes,
      diabetesInsulina,
      doencaCatapora,
      doencaCaxumba,
      doencaCongenita,
      doencaCoqueluche,
      doencaOutro,
      doencaRubeola,
      doencaSarampo,
      epilepsia,
      epilepsiaTratamento,
      hipertensao,
      medicacaoEspecifica,
      medicacaoEspecificaPergunta,
      necessidadeAuditiva,
      necessidadeAutismo,
      necessidadeClinica,
      necessidadeClinicaEndereco,
      necessidadeClinicaTelefone,
      necessidadeMotora,
      necessidadeSindromeDown,
      necessidadeTDA,
      necessidadeTDAH,
      necessidadeTDO,
      necessidadeVisual,
      parentesco1,
      parentesco2,
      parentescoTelefone1,
      parentescoTelefone2,
      planoSaude,
      planoSaudePergunta,
      tratamentoMedico,
      tratamentoMedicoPergunta,
      ativo,
    }: EditAlunoRequest = request.body as unknown as EditAlunoRequest;
    const editAlunoService = new EditAlunoService();
    try {
      const alunoEdited = editAlunoService.execute({
        nome,
        id,
        foto,
        cpf,
        numeroNIS,
        rg,
        orgaoExpedidorRg,
        dataNascimento,
        email,
        telefoneResidencia,
        telefoneFixo,
        resideOutros,
        escolaAnterior,
        consideracaoFamiliar,
        cor_id,
        genero_id,
        cidade_id,
        estado_id,
        nacionalidade_id,
        nomeMae,
        cpfMae,
        rgMae,
        orgaoExpedidorRgMae,
        dataNascimentoMae,
        resideMae,
        profissaoMae,
        trabalhoMae,
        telefoneTrabalhoMae,
        nomePai,
        cpfPai,
        rgPai,
        orgaoExpedidorRgPai,
        dataNascimentoPai,
        residePai,
        profissaoPai,
        trabalhoPai,
        telefoneTrabalhoPai,
        acompanhamentoEspecialista,
        acompanhamentoEspecialistaPergunta,
        alergiaMedicamento,
        alergiaMedicamentoPergunta,
        asma,
        avisarNome1,
        avisarNome2,
        diabetes,
        diabetesInsulina,
        doencaCatapora,
        doencaCaxumba,
        doencaCongenita,
        doencaCoqueluche,
        doencaOutro,
        doencaRubeola,
        doencaSarampo,
        epilepsia,
        epilepsiaTratamento,
        hipertensao,
        medicacaoEspecifica,
        medicacaoEspecificaPergunta,
        necessidadeAuditiva,
        necessidadeAutismo,
        necessidadeClinica,
        necessidadeClinicaEndereco,
        necessidadeClinicaTelefone,
        necessidadeMotora,
        necessidadeSindromeDown,
        necessidadeTDA,
        necessidadeTDAH,
        necessidadeTDO,
        necessidadeVisual,
        parentesco1,
        parentesco2,
        parentescoTelefone1,
        parentescoTelefone2,
        planoSaude,
        planoSaudePergunta,
        tratamentoMedico,
        tratamentoMedicoPergunta,
        ativo,
      });
      return response.status(201).json("Sucesso ao alterar dados de aluno!");
    } catch (error) {
      return response
        .status(400)
        .json(
          (error =
            "Erro ao alterar dados de aluno, verifique se os campos estão preenchidos corretamente!")
        );
    }
  }
}

class GetEditAlunoController {
  async handle(request: Request, response: Response) {
    const id = request.query.aluno_id as string;
    const editAlunoService = new GetEditAlunoService();
    try {
      const aluno = await editAlunoService.execute(id);
      return response.json(aluno);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de Aluno!"));
    }
  }
}

class ListAlunoController {
  async handle(request: Request, response: Response) {
    const listAlunoService = new ListAlunoService();
    try {
      const aluno = await listAlunoService.execute();
      return response.json(aluno);
    } catch (error) {
      return response
        .status(400)
        .json((error = "Erro ao localizar dados de Alunos!"));
    }
  }
}

export {
  CreateAlunoController,
  EditAlunoController,
  GetEditAlunoController,
  ListAlunoController,
};
