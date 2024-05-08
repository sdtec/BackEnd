export interface CreateAlunoRequest {
    nome: string;
    foto: string;
    cpf: string;
    numeroNIS: string;
    rg: string;
    orgaoExpedidorRg: string;
    dataNascimento: Date;
    email: string;
    telefoneResidencia: string;
    telefoneFixo: string;
    resideOutros: string;
    escolaAnterior: string;
    consideracaoFamiliar: string;
    cor_id: string;
    genero_id: string;
    cidade_id: string;
    estado_id: string;
    nacionalidade_id: string;
  
    // Dados Mãe
  
    nomeMae: string;
    cpfMae: string;
    rgMae: string;
    orgaoExpedidorRgMae: string;
    dataNascimentoMae: Date;
    resideMae: boolean;
    profissaoMae: string;
    trabalhoMae: string;
    telefoneTrabalhoMae: string;
  
    // Dados pai
  
    nomePai: string;
    cpfPai: string;
    rgPai: string;
    orgaoExpedidorRgPai: string;
    dataNascimentoPai: Date;
    residePai: boolean;
    profissaoPai: string;
    trabalhoPai: string;
    telefoneTrabalhoPai: string;
  
    // Aspectos de Saúde
  
    acompanhamentoEspecialista: boolean;
    acompanhamentoEspecialistaPergunta: string;
    alergiaMedicamento: boolean;
    alergiaMedicamentoPergunta: string;
    asma: boolean;
    avisarNome1: string;
    avisarNome2: string;
    diabetes: boolean;
    diabetesInsulina: boolean;
    doencaCatapora: boolean;
    doencaCaxumba: boolean;
    doencaCongenita: boolean;
    doencaCoqueluche: boolean;
    doencaOutro: string;
    doencaRubeola: boolean;
    doencaSarampo: boolean;
    epilepsia: boolean;
    epilepsiaTratamento: boolean;
    hipertensao: boolean;
    medicacaoEspecifica: boolean;
    medicacaoEspecificaPergunta: string;
    necessidadeAuditiva: boolean;
    necessidadeAutismo: boolean;
    necessidadeClinica: string;
    necessidadeClinicaEndereco: string;
    necessidadeClinicaTelefone: string;
    necessidadeMotora: boolean;
    necessidadeSindromeDown: boolean;
    necessidadeTDA: boolean;
    necessidadeTDAH: boolean;
    necessidadeTDO: boolean;
    necessidadeVisual: boolean;
    parentesco1: string;
    parentesco2: string;
    parentescoTelefone1: string;
    parentescoTelefone2: string;
    planoSaude: boolean;
    planoSaudePergunta: string;
    tratamentoMedico: boolean;
    tratamentoMedicoPergunta: string;
    ativo: boolean;
  }
  export interface EditAlunoRequest {
    id: string;
    nome: string;
    foto: string;
    cpf: string;
    numeroNIS: string;
    rg: string;
    orgaoExpedidorRg: string;
    dataNascimento: Date;
    email: string;
    telefoneResidencia: string;
    telefoneFixo: string;
    resideOutros: string;
    escolaAnterior: string;
    consideracaoFamiliar: string;
    cor_id: string;
    genero_id: string;
    cidade_id: string;
    estado_id: string;
    nacionalidade_id: string;
  
    // Dados Mãe
  
    nomeMae: string;
    cpfMae: string;
    rgMae: string;
    orgaoExpedidorRgMae: string;
    dataNascimentoMae: Date;
    resideMae: boolean;
    profissaoMae: string;
    trabalhoMae: string;
    telefoneTrabalhoMae: string;
  
    // Dados pai
  
    nomePai: string;
    cpfPai: string;
    rgPai: string;
    orgaoExpedidorRgPai: string;
    dataNascimentoPai: Date;
    residePai: boolean;
    profissaoPai: string;
    trabalhoPai: string;
    telefoneTrabalhoPai: string;
  
    // Aspectos de Saúde
  
    acompanhamentoEspecialista: boolean;
    acompanhamentoEspecialistaPergunta: string;
    alergiaMedicamento: boolean;
    alergiaMedicamentoPergunta: string;
    asma: boolean;
    avisarNome1: string;
    avisarNome2: string;
    diabetes: boolean;
    diabetesInsulina: boolean;
    doencaCatapora: boolean;
    doencaCaxumba: boolean;
    doencaCongenita: boolean;
    doencaCoqueluche: boolean;
    doencaOutro: string;
    doencaRubeola: boolean;
    doencaSarampo: boolean;
    epilepsia: boolean;
    epilepsiaTratamento: boolean;
    hipertensao: boolean;
    medicacaoEspecifica: boolean;
    medicacaoEspecificaPergunta: string;
    necessidadeAuditiva: boolean;
    necessidadeAutismo: boolean;
    necessidadeClinica: string;
    necessidadeClinicaEndereco: string;
    necessidadeClinicaTelefone: string;
    necessidadeMotora: boolean;
    necessidadeSindromeDown: boolean;
    necessidadeTDA: boolean;
    necessidadeTDAH: boolean;
    necessidadeTDO: boolean;
    necessidadeVisual: boolean;
    parentesco1: string;
    parentesco2: string;
    parentescoTelefone1: string;
    parentescoTelefone2: string;
    planoSaude: boolean;
    planoSaudePergunta: string;
    tratamentoMedico: boolean;
    tratamentoMedicoPergunta: string;
    ativo: boolean;
  }
  