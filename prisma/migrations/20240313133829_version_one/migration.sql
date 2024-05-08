-- CreateTable
CREATE TABLE `Aluno` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NULL,
    `numeroNIS` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NULL,
    `orgaoExpedidorRg` VARCHAR(191) NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telefoneResidencia` VARCHAR(191) NOT NULL,
    `telefoneFixo` VARCHAR(191) NOT NULL,
    `resideOutros` VARCHAR(191) NULL,
    `escolaAnterior` VARCHAR(191) NULL,
    `consideracaoFamiliar` VARCHAR(191) NULL,
    `cor_id` VARCHAR(191) NOT NULL,
    `genero_id` VARCHAR(191) NOT NULL,
    `cidade_id` VARCHAR(191) NOT NULL,
    `estado_id` VARCHAR(191) NOT NULL,
    `nacionalidade_id` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `nomeMae` VARCHAR(191) NOT NULL,
    `cpfMae` VARCHAR(191) NOT NULL,
    `rgMae` VARCHAR(191) NOT NULL,
    `orgaoExpedidorRgMae` VARCHAR(191) NOT NULL,
    `dataNascimentoMae` DATETIME(3) NOT NULL,
    `resideMae` BOOLEAN NOT NULL,
    `profissaoMae` VARCHAR(191) NOT NULL,
    `trabalhoMae` VARCHAR(191) NULL,
    `telefoneTrabalhoMae` VARCHAR(191) NULL,
    `nomePai` VARCHAR(191) NOT NULL,
    `cpfPai` VARCHAR(191) NOT NULL,
    `rgPai` VARCHAR(191) NOT NULL,
    `orgaoExpedidorRgPai` VARCHAR(191) NOT NULL,
    `dataNascimentoPai` DATETIME(3) NOT NULL,
    `residePai` BOOLEAN NOT NULL,
    `profissaoPai` VARCHAR(191) NOT NULL,
    `trabalhoPai` VARCHAR(191) NULL,
    `telefoneTrabalhoPai` VARCHAR(191) NULL,
    `acompanhamentoEspecialista` BOOLEAN NOT NULL DEFAULT false,
    `acompanhamentoEspecialistaPergunta` VARCHAR(191) NULL,
    `alergiaMedicamento` BOOLEAN NOT NULL DEFAULT false,
    `alergiaMedicamentoPergunta` VARCHAR(191) NULL,
    `asma` BOOLEAN NOT NULL DEFAULT false,
    `avisarNome1` VARCHAR(191) NULL,
    `avisarNome2` VARCHAR(191) NULL,
    `diabetes` BOOLEAN NOT NULL DEFAULT false,
    `diabetesInsulina` BOOLEAN NOT NULL DEFAULT false,
    `doencaCatapora` BOOLEAN NOT NULL DEFAULT false,
    `doencaCaxumba` BOOLEAN NOT NULL DEFAULT false,
    `doencaCongenita` BOOLEAN NOT NULL DEFAULT false,
    `doencaCoqueluche` BOOLEAN NOT NULL DEFAULT false,
    `doencaOutro` VARCHAR(191) NULL,
    `doencaRubeola` BOOLEAN NOT NULL DEFAULT false,
    `doencaSarampo` BOOLEAN NOT NULL DEFAULT false,
    `epilepsia` BOOLEAN NOT NULL DEFAULT false,
    `epilepsiaTratamento` BOOLEAN NOT NULL DEFAULT false,
    `hipertensao` BOOLEAN NOT NULL DEFAULT false,
    `medicacaoEspecifica` BOOLEAN NOT NULL DEFAULT false,
    `medicacaoEspecificaPergunta` VARCHAR(191) NULL,
    `necessidadeAuditiva` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeAutismo` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeClinica` VARCHAR(191) NULL,
    `necessidadeClinicaEndereco` VARCHAR(191) NULL,
    `necessidadeClinicaTelefone` VARCHAR(191) NULL,
    `necessidadeMotora` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeSindromeDown` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeTDA` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeTDAH` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeTDO` BOOLEAN NOT NULL DEFAULT false,
    `necessidadeVisual` BOOLEAN NOT NULL DEFAULT false,
    `parentesco1` VARCHAR(191) NULL,
    `parentesco2` VARCHAR(191) NULL,
    `parentescoTelefone1` VARCHAR(191) NULL,
    `parentescoTelefone2` VARCHAR(191) NULL,
    `planoSaude` BOOLEAN NOT NULL DEFAULT false,
    `planoSaudePergunta` VARCHAR(191) NULL,
    `tratamentoMedico` BOOLEAN NOT NULL DEFAULT false,
    `tratamentoMedicoPergunta` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Avaliacao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Boletim` (
    `id` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `turma_id` VARCHAR(191) NOT NULL,
    `matricula_id` VARCHAR(191) NOT NULL,
    `fechado` BOOLEAN NOT NULL DEFAULT false,
    `ano` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BoletimNota` (
    `id` VARCHAR(191) NOT NULL,
    `boletim_id` VARCHAR(191) NOT NULL,
    `notaRecuperacao` DOUBLE NULL,
    `situacao_id` VARCHAR(191) NOT NULL,
    `disciplina_id` VARCHAR(191) NOT NULL,
    `falta1Bimestre` INTEGER NOT NULL DEFAULT 0,
    `falta2Bimestre` INTEGER NOT NULL DEFAULT 0,
    `falta3Bimestre` INTEGER NOT NULL DEFAULT 0,
    `falta4Bimestre` INTEGER NOT NULL DEFAULT 0,
    `notaConselhoClasse` DOUBLE NULL,
    `n11B` DOUBLE NULL,
    `n21B` DOUBLE NULL,
    `n31B` DOUBLE NULL,
    `rP1B` DOUBLE NULL,
    `n12B` DOUBLE NULL,
    `n22B` DOUBLE NULL,
    `n32B` DOUBLE NULL,
    `rP2B` DOUBLE NULL,
    `n13B` DOUBLE NULL,
    `n23B` DOUBLE NULL,
    `n33B` DOUBLE NULL,
    `rP3B` DOUBLE NULL,
    `n14B` DOUBLE NULL,
    `n24B` DOUBLE NULL,
    `n34B` DOUBLE NULL,
    `rP4B` DOUBLE NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CentroCusto` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `operacao_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `estado_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CobrancaEscolar` (
    `id` VARCHAR(191) NOT NULL,
    `nivelSerie_id` VARCHAR(191) NOT NULL,
    `valorSemiIntegral` DECIMAL(65, 30) NOT NULL,
    `valorIntegral` DECIMAL(65, 30) NOT NULL,
    `valorMeioPeriodo` DECIMAL(65, 30) NOT NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `quantidadeParcela` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CobrancaModalidade` (
    `id` VARCHAR(191) NOT NULL,
    `modalidade_id` VARCHAR(191) NOT NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `quantidadeParcela` INTEGER NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Conceito` (
    `id` VARCHAR(191) NOT NULL,
    `frequencia1Bimestre` INTEGER NULL,
    `frequencia2Bimestre` INTEGER NULL,
    `frequencia3Bimestre` INTEGER NULL,
    `frequencia4Bimestre` INTEGER NULL,
    `observacao` VARCHAR(191) NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `turma_id` VARCHAR(191) NOT NULL,
    `matricula_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ConceitoAvaliacao` (
    `id` VARCHAR(191) NOT NULL,
    `conceito_id` VARCHAR(191) NOT NULL,
    `desenvolvimentoConceito_id` VARCHAR(191) NOT NULL,
    `avaliacao1B_id` VARCHAR(191) NOT NULL,
    `avaliacao2B_id` VARCHAR(191) NOT NULL,
    `avaliacao3B_id` VARCHAR(191) NOT NULL,
    `avaliacao4B_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrato` (
    `id` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `turma_id` VARCHAR(191) NOT NULL,
    `matricula_id` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContratoParcela` (
    `id` VARCHAR(191) NOT NULL,
    `contrato_id` VARCHAR(191) NOT NULL,
    `formaPagamento_id` VARCHAR(191) NOT NULL,
    `numeroParcela` INTEGER NOT NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `valorDesconto` DECIMAL(65, 30) NULL,
    `total` DECIMAL(65, 30) NULL,
    `dataBaixaPagamento` DATETIME(3) NULL,
    `observacao` VARCHAR(191) NULL,
    `juros` DECIMAL(65, 30) NULL,
    `multa` DECIMAL(65, 30) NULL,
    `valorPagamento` DECIMAL(65, 30) NULL,
    `dataPagamento` DATETIME(3) NULL,
    `usuario_id` VARCHAR(191) NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `valorCobrado` DECIMAL(65, 30) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContratoModalidade` (
    `id` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `quantidadeParcela` INTEGER NOT NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `turmaModalidade_id` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `matriculaModalidade_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ContratoParcelaModalidade` (
    `id` VARCHAR(191) NOT NULL,
    `contratoModalidade_id` VARCHAR(191) NOT NULL,
    `valorCobrado` DECIMAL(65, 30) NOT NULL,
    `valorPagamento` DECIMAL(65, 30) NOT NULL,
    `numeroParcela` INTEGER NOT NULL,
    `dataPagamento` DATETIME(3) NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `valorDesconto` DECIMAL(65, 30) NULL,
    `situacao_id` VARCHAR(191) NOT NULL,
    `dataBaixaPagamento` DATETIME(3) NULL,
    `formaPagamento_id` VARCHAR(191) NOT NULL,
    `juros` DECIMAL(65, 30) NULL,
    `multa` DECIMAL(65, 30) NULL,
    `total` DECIMAL(65, 30) NULL,
    `observacao` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cor` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Desconto` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `tipo` DECIMAL(65, 30) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesenvolvimentoAluno` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DesenvolvimentoConceito` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `desenvolvimentoAluno_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disciplina` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ordem` INTEGER NOT NULL,
    `cargaHoraria` INTEGER NOT NULL,
    `valorCobrado` DECIMAL(65, 30) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DisciplinaSerie` (
    `id` VARCHAR(191) NOT NULL,
    `disciplina_id` VARCHAR(191) NOT NULL,
    `serie_id` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Documento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Empresa` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `nomeFantasia` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `numeroEndereco` INTEGER NOT NULL,
    `cidade_id` VARCHAR(191) NOT NULL,
    `numeroCnpj` VARCHAR(191) NOT NULL,
    `numeroTelefone` VARCHAR(191) NOT NULL,
    `complemento` VARCHAR(191) NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nomeSecretaria` VARCHAR(191) NOT NULL,
    `nomeDiretor` VARCHAR(191) NOT NULL,
    `numeroCep` VARCHAR(191) NOT NULL,
    `resolucao` VARCHAR(191) NULL,
    `declaracao` VARCHAR(191) NULL,
    `logoEmpresa` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Estado` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `sigla` VARCHAR(191) NOT NULL,
    `nacionalidade_id` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FormaPagamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Matricula` (
    `id` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `tipoContrato_id` VARCHAR(191) NOT NULL,
    `turma_id` VARCHAR(191) NOT NULL,
    `situacao_id` VARCHAR(191) NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `anoLetivo` INTEGER NOT NULL,
    `responsavel_id` VARCHAR(191) NOT NULL,
    `dataMatricula` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MatriculaModalidade` (
    `id` VARCHAR(191) NOT NULL,
    `aluno_id` VARCHAR(191) NOT NULL,
    `turmaModalidade_id` VARCHAR(191) NOT NULL,
    `situacao_id` VARCHAR(191) NOT NULL,
    `quantidadeParcela` INTEGER NOT NULL,
    `observacao` VARCHAR(191) NULL,
    `dataVencimento` DATETIME(3) NOT NULL,
    `dataMatricula` DATETIME(3) NOT NULL,
    `desconto_id` VARCHAR(191) NOT NULL,
    `responsavel_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modalidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Nacionalidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NivelSerie` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `valorTaxaPapelaria` DECIMAL(65, 30) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Operacao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professor` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `telefoneComercial` VARCHAR(191) NOT NULL,
    `telefoneCelular` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `lancarNotaRetroativa` BOOLEAN NOT NULL DEFAULT true,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Responsavel` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `dataNascimento` DATETIME(3) NOT NULL,
    `profissao` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `orgaoExpedidorRg` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `bairro` VARCHAR(191) NOT NULL,
    `cep` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `celular` VARCHAR(191) NOT NULL,
    `telefoneTrabalho` VARCHAR(191) NOT NULL,
    `grauParentesco` VARCHAR(191) NOT NULL,
    `cidade_id` VARCHAR(191) NOT NULL,
    `estado_id` VARCHAR(191) NOT NULL,
    `nacionalidade_id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `estadoCivil` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sala` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Serie` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ordem` INTEGER NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `nivelSerie_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Situacao` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoContrato` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turma` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `numeroCapacidade` INTEGER NOT NULL,
    `valorMeioPeriodo` DECIMAL(65, 30) NOT NULL,
    `valorIntegral` DECIMAL(65, 30) NOT NULL,
    `valorSemiIntegral` DECIMAL(65, 30) NOT NULL,
    `anoCalendario` INTEGER NOT NULL,
    `valorMensalidade` DECIMAL(65, 30) NOT NULL,
    `horarioInicial` VARCHAR(191) NOT NULL,
    `horarioFinal` VARCHAR(191) NOT NULL,
    `ordem` INTEGER NOT NULL,
    `turno_id` VARCHAR(191) NOT NULL,
    `sala_id` VARCHAR(191) NOT NULL,
    `serie_id` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TurmaModalidade` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `numeroCapacidade` INTEGER NOT NULL,
    `valorMensalidade` DECIMAL(65, 30) NOT NULL,
    `anoCalendario` VARCHAR(191) NOT NULL,
    `dataVencimentoParcela` DATETIME(3) NOT NULL,
    `turno_id` VARCHAR(191) NOT NULL,
    `modalidade_id` VARCHAR(191) NOT NULL,
    `professor_id` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Turno` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `ativo` BOOLEAN NOT NULL DEFAULT true,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_cor_id_fkey` FOREIGN KEY (`cor_id`) REFERENCES `Cor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_genero_id_fkey` FOREIGN KEY (`genero_id`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_cidade_id_fkey` FOREIGN KEY (`cidade_id`) REFERENCES `Cidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_estado_id_fkey` FOREIGN KEY (`estado_id`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Aluno` ADD CONSTRAINT `Aluno_nacionalidade_id_fkey` FOREIGN KEY (`nacionalidade_id`) REFERENCES `Nacionalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Boletim` ADD CONSTRAINT `Boletim_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Boletim` ADD CONSTRAINT `Boletim_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Boletim` ADD CONSTRAINT `Boletim_matricula_id_fkey` FOREIGN KEY (`matricula_id`) REFERENCES `Matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BoletimNota` ADD CONSTRAINT `BoletimNota_boletim_id_fkey` FOREIGN KEY (`boletim_id`) REFERENCES `Boletim`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BoletimNota` ADD CONSTRAINT `BoletimNota_situacao_id_fkey` FOREIGN KEY (`situacao_id`) REFERENCES `Situacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BoletimNota` ADD CONSTRAINT `BoletimNota_disciplina_id_fkey` FOREIGN KEY (`disciplina_id`) REFERENCES `Disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CentroCusto` ADD CONSTRAINT `CentroCusto_operacao_id_fkey` FOREIGN KEY (`operacao_id`) REFERENCES `Operacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cidade` ADD CONSTRAINT `Cidade_estado_id_fkey` FOREIGN KEY (`estado_id`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CobrancaEscolar` ADD CONSTRAINT `CobrancaEscolar_nivelSerie_id_fkey` FOREIGN KEY (`nivelSerie_id`) REFERENCES `NivelSerie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CobrancaModalidade` ADD CONSTRAINT `CobrancaModalidade_modalidade_id_fkey` FOREIGN KEY (`modalidade_id`) REFERENCES `Modalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conceito` ADD CONSTRAINT `Conceito_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conceito` ADD CONSTRAINT `Conceito_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Conceito` ADD CONSTRAINT `Conceito_matricula_id_fkey` FOREIGN KEY (`matricula_id`) REFERENCES `Matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConceitoAvaliacao` ADD CONSTRAINT `ConceitoAvaliacao_conceito_id_fkey` FOREIGN KEY (`conceito_id`) REFERENCES `Conceito`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ConceitoAvaliacao` ADD CONSTRAINT `ConceitoAvaliacao_desenvolvimentoConceito_id_fkey` FOREIGN KEY (`desenvolvimentoConceito_id`) REFERENCES `DesenvolvimentoConceito`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrato` ADD CONSTRAINT `Contrato_matricula_id_fkey` FOREIGN KEY (`matricula_id`) REFERENCES `Matricula`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoParcela` ADD CONSTRAINT `ContratoParcela_contrato_id_fkey` FOREIGN KEY (`contrato_id`) REFERENCES `Contrato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoParcela` ADD CONSTRAINT `ContratoParcela_formaPagamento_id_fkey` FOREIGN KEY (`formaPagamento_id`) REFERENCES `FormaPagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoModalidade` ADD CONSTRAINT `ContratoModalidade_turmaModalidade_id_fkey` FOREIGN KEY (`turmaModalidade_id`) REFERENCES `TurmaModalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoModalidade` ADD CONSTRAINT `ContratoModalidade_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoModalidade` ADD CONSTRAINT `ContratoModalidade_matriculaModalidade_id_fkey` FOREIGN KEY (`matriculaModalidade_id`) REFERENCES `MatriculaModalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoParcelaModalidade` ADD CONSTRAINT `ContratoParcelaModalidade_contratoModalidade_id_fkey` FOREIGN KEY (`contratoModalidade_id`) REFERENCES `ContratoModalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoParcelaModalidade` ADD CONSTRAINT `ContratoParcelaModalidade_situacao_id_fkey` FOREIGN KEY (`situacao_id`) REFERENCES `Situacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ContratoParcelaModalidade` ADD CONSTRAINT `ContratoParcelaModalidade_formaPagamento_id_fkey` FOREIGN KEY (`formaPagamento_id`) REFERENCES `FormaPagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DesenvolvimentoConceito` ADD CONSTRAINT `DesenvolvimentoConceito_desenvolvimentoAluno_id_fkey` FOREIGN KEY (`desenvolvimentoAluno_id`) REFERENCES `DesenvolvimentoAluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DisciplinaSerie` ADD CONSTRAINT `DisciplinaSerie_disciplina_id_fkey` FOREIGN KEY (`disciplina_id`) REFERENCES `Disciplina`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DisciplinaSerie` ADD CONSTRAINT `DisciplinaSerie_serie_id_fkey` FOREIGN KEY (`serie_id`) REFERENCES `Serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Empresa` ADD CONSTRAINT `Empresa_cidade_id_fkey` FOREIGN KEY (`cidade_id`) REFERENCES `Cidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Estado` ADD CONSTRAINT `Estado_nacionalidade_id_fkey` FOREIGN KEY (`nacionalidade_id`) REFERENCES `Nacionalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_tipoContrato_id_fkey` FOREIGN KEY (`tipoContrato_id`) REFERENCES `TipoContrato`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_turma_id_fkey` FOREIGN KEY (`turma_id`) REFERENCES `Turma`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_situacao_id_fkey` FOREIGN KEY (`situacao_id`) REFERENCES `Situacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Matricula` ADD CONSTRAINT `Matricula_responsavel_id_fkey` FOREIGN KEY (`responsavel_id`) REFERENCES `Responsavel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatriculaModalidade` ADD CONSTRAINT `MatriculaModalidade_aluno_id_fkey` FOREIGN KEY (`aluno_id`) REFERENCES `Aluno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatriculaModalidade` ADD CONSTRAINT `MatriculaModalidade_turmaModalidade_id_fkey` FOREIGN KEY (`turmaModalidade_id`) REFERENCES `TurmaModalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatriculaModalidade` ADD CONSTRAINT `MatriculaModalidade_situacao_id_fkey` FOREIGN KEY (`situacao_id`) REFERENCES `Situacao`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatriculaModalidade` ADD CONSTRAINT `MatriculaModalidade_desconto_id_fkey` FOREIGN KEY (`desconto_id`) REFERENCES `Desconto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MatriculaModalidade` ADD CONSTRAINT `MatriculaModalidade_responsavel_id_fkey` FOREIGN KEY (`responsavel_id`) REFERENCES `Responsavel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responsavel` ADD CONSTRAINT `Responsavel_cidade_id_fkey` FOREIGN KEY (`cidade_id`) REFERENCES `Cidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responsavel` ADD CONSTRAINT `Responsavel_estado_id_fkey` FOREIGN KEY (`estado_id`) REFERENCES `Estado`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Responsavel` ADD CONSTRAINT `Responsavel_nacionalidade_id_fkey` FOREIGN KEY (`nacionalidade_id`) REFERENCES `Nacionalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Serie` ADD CONSTRAINT `Serie_nivelSerie_id_fkey` FOREIGN KEY (`nivelSerie_id`) REFERENCES `NivelSerie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_turno_id_fkey` FOREIGN KEY (`turno_id`) REFERENCES `Turno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_sala_id_fkey` FOREIGN KEY (`sala_id`) REFERENCES `Sala`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Turma` ADD CONSTRAINT `Turma_serie_id_fkey` FOREIGN KEY (`serie_id`) REFERENCES `Serie`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TurmaModalidade` ADD CONSTRAINT `TurmaModalidade_turno_id_fkey` FOREIGN KEY (`turno_id`) REFERENCES `Turno`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TurmaModalidade` ADD CONSTRAINT `TurmaModalidade_modalidade_id_fkey` FOREIGN KEY (`modalidade_id`) REFERENCES `Modalidade`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TurmaModalidade` ADD CONSTRAINT `TurmaModalidade_professor_id_fkey` FOREIGN KEY (`professor_id`) REFERENCES `Professor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
