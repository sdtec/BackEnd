import { Router } from "express";

/* Controllers */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import {
  EditCorController,
  getEditCorController,
  ListCorController,
  CreateCorController,
} from "./controllers/CorController";
import {
  CreateAlunoController,
  EditAlunoController,
  GetEditAlunoController,
  ListAlunoController,
} from "./controllers/AlunoController";
import { ListAvaliacaoController } from "./controllers/AvaliacaoController";
import {
  EditBoletimController,
  GetEditBoletimController,
  ListBoletimController,
} from "./controllers/BoletimController";
import {
  CreateCidadeController,
  EditCidadeController,
  GetEditCidadeController,
  ListCidadeController,
} from "./controllers/CidadeController";
import {
  CreateCobrancaEscolarController,
  EditCobrancaEscolarController,
  GetEditCobrancaEscolarController,
  ListCobrancaEscolarController,
} from "./controllers/CobrancaEscolarController"; 
import {
  CreateCobrancaModalidadeController,
  EditCobrancaModalidadeController,
  GetEditCobrancaModalidadeController,
  ListCobrancaModalidadeController,
} from "./controllers/CobrancaModalidadeController";
import {
  CreateDescontoController,
  EditDescontoController,
  GetEditDescontoController,
  ListDescontoController,
} from "./controllers/DescontoController";
import {
  CreateDesenvolvimentoAlunoController,
  EditDesenvolvimentoAlunoController,
  GetEditDesenvolvimentoAlunoController,
  ListDesenvolvimentoAlunoController,
} from "./controllers/DesenvolvimentoAlunoController";
import {
  CreateDisciplinaController,
  EditDisciplinaController,
  GetEditDisciplinaController,
  ListDisciplinaController,
} from "./controllers/DisciplinaController";
import {
  CreateDisciplinaSerieController,
  EditDisciplinaSerieController,
  GetEditDisciplinaSerieController,
  ListDisciplinaSerieController,
} from "./controllers/DisciplinaSerieController";
import {
  CreateDocumentoController,
  EditDocumentoController,
  GetEditDocumentoController,
  ListDocumentoController,
} from "./controllers/DocumentoController";
import {
  CreateEmpresaController,
  EditEmpresaController,
  GetEditEmpresaController,
  ListEmpresaController,
} from "./controllers/EmpresaController";
import {
  CreateEstadoController,
  EditEstadoController,
  GetEditEstadoController,
  ListEstadoController,
} from "./controllers/EstadoController";
import {
  CreateFormaPagamentoController,
  EditFormaPagamentoController,
  GetEditFormaPagamentoController,
  ListFormaPagamentoController,
} from "./controllers/FormaPagamentoController";
import {
  CreateGeneroController,
  EditGeneroController,
  GetEditGeneroController,
  ListGeneroController,
} from "./controllers/GeneroController";
import {
  CreateMatriculaController,
  EditMatriculaController,
  GetEditMatriculaController,
  ListBoletimMatriculaController,
  ListConceitoMatriculaController,
  ListMatriculaController,
} from "./controllers/MatriculaController";
import {
  CreateMatriculaModalidadeController,
  GetEditMatriculaModalidadeController,
  ListMatriculaModalidadeController,
} from "./controllers/MatriculaModalidadeController";
import {
  CreateModalidadeController,
  EditModalidadeController,
  GetEditModalidadeController,
  ListModalidadeController,
} from "./controllers/ModalidadeController";
import {
  CreateNacionalidadeController,
  EditNacionalidadeController,
  GetEditNacionalidadeController,
  ListNacionalidadeController,
} from "./controllers/NacionalidadeController";
import {
  CreateNivelSerieController,
  EditNivelSerieController,
  GetEditNivelSerieController,
  ListNivelSerieController,
} from "./controllers/NivelSerieController";
import {
  CreateProfessorController,
  EditProfessorController,
  GetEditProfessorController,
  ListProfessorController,
} from "./controllers/ProfessorController";
import {
  CreateSalaController,
  EditSalaController,
  GetEditSalaController,
  ListSalaController,
} from "./controllers/SalaController";
import {
  CreateSerieController,
  EditSerieController,
  GetEditSerieController,
  ListSerieController,
} from "./controllers/SerieController";
import {
  CreateSituacaoController,
  EditSituacaoController,
  GetEditSituacaoController,
  ListSituacaoController,
} from "./controllers/SituacaoController";
import {
  CreateTipoContratoController,
  EditTipoContratoController,
  GetEditTipoContratoController,
  ListTipoContratoController,
} from "./controllers/TipoContratoController";
import {
  CreateTurmaController,
  EditTurmaController,
  GetEditTurmaController,
  ListTurmaController,
  ListTurmaSerieController,
} from "./controllers/TurmaController";
import {
  CreateTurmaModalidadeController,
  EditTurmaModalidadeController,
  GetEditTurmaModalidadeController,
  ListTurmaModalidadeController,
} from "./controllers/TurmaModalidadeController";
import {
  CreateTurnoController,
  EditTurnoController,
  GetEditTurnoController,
  ListTurnoController,
} from "./controllers/TurnoController";
import {
  CreateDesenvolvimentoConceitoController,
  EditDesenvolvimentoConceitoController,
  GetEditDesenvolvimentoConceitoController,
  ListDesenvolvimentoConceitoController,
} from "./controllers/DesenvolvimentoConceitoController";
import {
  CreateResponsavelController,
  EditResponsavelController,
  GetEditResponsavelController,
  ListResponsavelController,
} from "./controllers/ResponsavelController";
import { ListContratoController } from "./controllers/ContratoController";
import {
  EditConceitoController,
  GetEditConceitoController,
} from "./controllers/ConceitoController";
import {
  EditUsuarioController,
  GetEditUsuarioController,
  ListUsuarioController,
} from "./controllers/UsuarioController";
import multer from "multer";
import { EditContratoParcelaController, GetEditContratoParcelaController, ListContratoParcelaController } from "./controllers/ContratoParcelaController";
import { EditContratoParcelaModalidadeController, GetEditContratoParcelaModalidadeController, ListContratoParcelaModalidadeController } from "./controllers/ContratoParcelaModalidadeController";
import { ListContratoModalidadeController } from "./controllers/ContratoModalidadeController";
import { EditBoletimNotaController, GetEditBoletimNotaController, ListBoletimNotaController } from "./controllers/BoletimNotaController";
import { EditConceitoAvaliacaoController, ListConceitoAvaliacaoController } from "./controllers/ConceitoAvaliacaoController";
const router = Router();

// ALUNO

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/assets/images");
  },
  filename: function (req, file, cb) {
    const extesionfile = file.originalname.split(".")[1];

    const randomNumbers = Math.floor(Math.random() * 100000000);

    const nameFile = `${randomNumbers}.${extesionfile}`;

    cb(null, nameFile);
  },
});

const upload = multer({ storage });
let foto;
router.post(
  "/aluno/img",
  upload.single("foto"),
  isAuthenticated,
  (req, res, next) => {
    if (req.file == undefined) {
      foto = "undefined.png";
    } else {
      foto = req.file.filename;
    }
    res.json("Sucesso ao enviar a foto!");
  }
);
router.put(
  "/aluno/img/edit",
  upload.single("foto"),
  isAuthenticated,
  (req, res, next) => {
    if (req.file == undefined) {
      foto = "undefined.png";
    } else {
      foto = req.file.filename;
    }

    res.json("Sucesso ao enviar a foto!");
  }
);

router.put(
  "/aluno/edit",
  isAuthenticated,
  (req, res, next) => {
    req.body.foto = foto;
    foto = undefined;
    next();
  },
  new EditAlunoController().handle
);

router.post(
  "/aluno",
  isAuthenticated,
  (req, res, next) => {
    req.body.foto = foto;
    foto = undefined;
    next();
  },
  new CreateAlunoController().handle
);

router.get("/aluno", isAuthenticated, new ListAlunoController().handle);

router.get("/aluno/edit", isAuthenticated, new GetEditAlunoController().handle);

//AVALIAÇÃO ROUTES

router.get("/avaliacao", isAuthenticated, new ListAvaliacaoController().handle);
//BOLETIM ROUTES
router.get("/boletim", isAuthenticated, new ListBoletimController().handle);
router.get(
  "/boletim/edit",
  isAuthenticated,
  new GetEditBoletimController().handle
);
router.put(
  "/boletim/edit",
  isAuthenticated,
  new EditBoletimController().handle
);
//BOLETIM NOTA ROUTES
router.get(
  "/boletimnota/list/:boletimId",
  isAuthenticated,
  new ListBoletimNotaController().handle
);
router.get(
  "/boletimnota/lancarnota/:boletimId/:bimestre",
  isAuthenticated,
  new GetEditBoletimNotaController().handle
);
router.put(
  "/boletimnota/lancarnotas",
  isAuthenticated,
  new EditBoletimNotaController().handle
);
//CONCEITO AVALIAÇÃO
router.get(
  "/conceitoAvaliacao/list/:conceitoId",
  isAuthenticated,
  new ListConceitoAvaliacaoController().handle
);
router.put(
  "/conceitoAvaliacao/enviarConceito",
  isAuthenticated,
  new EditConceitoAvaliacaoController().handle
);

//CIDADE ROUTES
router.post("/cidade", isAuthenticated, new CreateCidadeController().handle);
router.get("/cidade", isAuthenticated, new ListCidadeController().handle);
router.get(
  "/cidade/edit",
  isAuthenticated,
  new GetEditCidadeController().handle
);
router.put("/cidade/edit", isAuthenticated, new EditCidadeController().handle);
//COBRANÇA ESCOLAR ROUTES
router.post(
  "/cobrancaEscolar",
  isAuthenticated,
  new CreateCobrancaEscolarController().handle
);
router.get(
  "/cobrancaEscolar",
  isAuthenticated,
  new ListCobrancaEscolarController().handle
);
router.get(
  "/cobrancaEscolar/edit",
  isAuthenticated,
  new GetEditCobrancaEscolarController().handle
);
router.put(
  "/cobrancaEscolar/edit",
  isAuthenticated,
  new EditCobrancaEscolarController().handle
);
//COBRANÇA MODALIDADE ROUTES
router.post(
  "/cobrancaModalidade",
  isAuthenticated,
  new CreateCobrancaModalidadeController().handle
);
router.get(
  "/cobrancaModalidade",
  isAuthenticated,
  new ListCobrancaModalidadeController().handle
);
router.get(
  "/cobrancaModalidade/edit",
  isAuthenticated,
  new GetEditCobrancaModalidadeController().handle
);
router.put(
  "/cobrancaModalidade/edit",
  isAuthenticated,
  new EditCobrancaModalidadeController().handle
);
//CONTRATO
router.get("/contrato", isAuthenticated, new ListContratoController().handle);
//CONTRATOPARCELA
router.get("/contratoparcela/list", isAuthenticated, new ListContratoParcelaController().handle);
router.get("/contratoparcela/edit", isAuthenticated, new GetEditContratoParcelaController().handle);
router.put("/contratoparcela/edit", isAuthenticated, new EditContratoParcelaController().handle);
//CONTRATO_MODALIDADE
router.get("/contratomodalidade", isAuthenticated, new ListContratoModalidadeController().handle);
//CONTRATO_PARCELA_MODALIDADE
router.get("/contratoparcelamodalidade/list", isAuthenticated, new ListContratoParcelaModalidadeController().handle);
router.get("/contratoparcelamodalidade/edit", isAuthenticated, new GetEditContratoParcelaModalidadeController().handle);
router.put("/contratoparcelamodalidade/edit", isAuthenticated, new EditContratoParcelaModalidadeController().handle);
// COR
router.post("/cor", isAuthenticated, new CreateCorController().handle);
router.get("/cor", isAuthenticated, new ListCorController().handle);
router.get("/cor/edit", isAuthenticated, new getEditCorController().handle);
router.put("/cor/edit", isAuthenticated, new EditCorController().handle);

router.get(
  "/conceito/edit",
  isAuthenticated,
  new GetEditConceitoController().handle
);
router.put(
  "/conceito/edit",
  isAuthenticated,
  new EditConceitoController().handle
);

//DESCONTO
router.post(
  "/desconto",
  isAuthenticated,
  new CreateDescontoController().handle
);
router.get(
  "/desconto/edit",
  isAuthenticated,
  new GetEditDescontoController().handle
);
router.get("/desconto", isAuthenticated, new ListDescontoController().handle);
router.put(
  "/desconto/edit",
  isAuthenticated,
  new EditDescontoController().handle
);
//DESENVOLVIMENTO ALUNO
router.post(
  "/desenvolvimentoAluno",
  isAuthenticated,
  new CreateDesenvolvimentoAlunoController().handle
);
router.get(
  "/desenvolvimentoAluno",
  isAuthenticated,
  new ListDesenvolvimentoAlunoController().handle
);
router.get(
  "/desenvolvimentoAluno/edit",
  isAuthenticated,
  new GetEditDesenvolvimentoAlunoController().handle
);
router.put(
  "/desenvolvimentoAluno/edit",
  isAuthenticated,
  new EditDesenvolvimentoAlunoController().handle
);
//DESENVOLVIMENTO CONCEITO
router.post(
  "/desenvolvimentoConceito",
  isAuthenticated,
  new CreateDesenvolvimentoConceitoController().handle
);
router.get(
  "/desenvolvimentoConceito/list",
  isAuthenticated,
  new ListDesenvolvimentoConceitoController().handle
);
router.get(
  "/desenvolvimentoConceito/edit",
  isAuthenticated,
  new GetEditDesenvolvimentoConceitoController().handle
);
router.put(
  "/desenvolvimentoConceito/edit",
  isAuthenticated,
  new EditDesenvolvimentoConceitoController().handle
);
//Disciplina
router.post(
  "/disciplina",
  isAuthenticated,
  new CreateDisciplinaController().handle
);
router.get(
  "/disciplina",
  isAuthenticated,
  new ListDisciplinaController().handle
);
router.get(
  "/disciplina/edit",
  isAuthenticated,
  new GetEditDisciplinaController().handle
);
router.put(
  "/disciplina/edit",
  isAuthenticated,
  new EditDisciplinaController().handle
);
//DISCIPLINA SÉRIE
router.post(
  "/disciplinaSerie",
  isAuthenticated,
  new CreateDisciplinaSerieController().handle
);
router.get(
  "/disciplinaSerie/list",
  isAuthenticated,
  new ListDisciplinaSerieController().handle
);
router.get(
  "/disciplinaSerie/edit",
  isAuthenticated,
  new GetEditDisciplinaSerieController().handle
);
router.put(
  "/disciplinaSerie/edit",
  isAuthenticated,
  new EditDisciplinaSerieController().handle
);
//DOCUMENTO
router.post(
  "/documento",
  isAuthenticated,
  new CreateDocumentoController().handle
);
router.get("/documento", isAuthenticated, new ListDocumentoController().handle);
router.get(
  "/documento/edit",
  isAuthenticated,
  new GetEditDocumentoController().handle
);
router.put(
  "/documento/edit",
  isAuthenticated,
  new EditDocumentoController().handle
);
//EMPRESA

let logo
router.post(
  "/empresa/img",
  upload.single("logo"),
  isAuthenticated,
  (req, res, next) => {
    if (req.file == undefined) {
      logo = "";
    } else {
      logo = req.file.filename;
    }
    res.json("Sucesso ao enviar a logo!");
  }
);
router.put(
  "/empresa/img/edit",
  upload.single("logo"),
  isAuthenticated,
  (req, res, next) => {
    if (req.file == undefined) {
      logo = ""; 
    } else {
     logo = req.file.filename
    }
 
    res.json("Sucesso ao enviar a logo!");
  }
);

router.post(
  "/empresa",
  isAuthenticated,
  (req, res, next) => {
    req.body.logoEmpresa = logo;
    next();
  },
  new CreateEmpresaController().handle
);
router.get("/empresa", isAuthenticated, new ListEmpresaController().handle);
router.get(
  "/empresa/edit",
  isAuthenticated,
  new GetEditEmpresaController().handle
);
router.put(
  "/empresa/edit",
  isAuthenticated,
  (req, res, next) => {
    req.body.logoEmpresa = logo;
    next();
  },
  new EditEmpresaController().handle 
); 

//ESTADO
router.post("/estado", isAuthenticated, new CreateEstadoController().handle);
router.get("/estado", isAuthenticated, new ListEstadoController().handle);
router.get(
  "/estado/edit",
  isAuthenticated,
  new GetEditEstadoController().handle
);
router.put("/estado/edit", isAuthenticated, new EditEstadoController().handle);
//FORMA PAGAMENTO
router.post(
  "/formaPagamento",
  isAuthenticated,
  new CreateFormaPagamentoController().handle
);
router.get(
  "/formaPagamento",
  isAuthenticated,
  new ListFormaPagamentoController().handle
);
router.get(
  "/formaPagamento/edit",
  isAuthenticated,
  new GetEditFormaPagamentoController().handle
);
router.put(
  "/formaPagamento/edit",
  isAuthenticated,
  new EditFormaPagamentoController().handle
);
//GENERO
router.post("/genero", isAuthenticated, new CreateGeneroController().handle);
router.get("/genero", isAuthenticated, new ListGeneroController().handle);
router.get(
  "/genero/edit",
  isAuthenticated,
  new GetEditGeneroController().handle
);
router.put("/genero/edit", isAuthenticated, new EditGeneroController().handle);
//MATRICULA
router.post(
  "/matricula",
  isAuthenticated,
  new CreateMatriculaController().handle
);
router.get("/matricula", isAuthenticated, new ListMatriculaController().handle);
router.get(
  "/matricula/conceitos/:anoLetivo/:turmaId",
  isAuthenticated,
  new ListConceitoMatriculaController().handle
);
router.get(
  "/matricula/boletins/:serieId/:anoLetivo/:turmaId",
  isAuthenticated,
  new ListBoletimMatriculaController().handle
);
router.get(
  "/matricula/edit",
  isAuthenticated,
  new GetEditMatriculaController().handle
);
router.put(
  "/matricula/edit",
  isAuthenticated,
  new EditMatriculaController().handle
);
//MATRICULA MODALIDADE
router.post(
  "/matriculaModalidade",
  isAuthenticated,
  new CreateMatriculaModalidadeController().handle
);
router.get(
  "/matriculaModalidade",
  isAuthenticated,
  new ListMatriculaModalidadeController().handle
);
router.get(
  "/matriculaModalidade/edit",
  isAuthenticated,
  new GetEditMatriculaModalidadeController().handle
);
router.put(
  "/matriculaModalidade/edit",
  isAuthenticated,
  new ListMatriculaModalidadeController().handle
);
//MODALIDADE
router.post(
  "/modalidade",
  isAuthenticated,
  new CreateModalidadeController().handle
);
router.get(
  "/modalidade",
  isAuthenticated,
  new ListModalidadeController().handle
);
router.get(
  "/modalidade/edit",
  isAuthenticated,
  new GetEditModalidadeController().handle
);
router.put(
  "/modalidade/edit",
  isAuthenticated,
  new EditModalidadeController().handle
);
//NACIONALIDADE
router.post(
  "/nacionalidade",
  isAuthenticated,
  new CreateNacionalidadeController().handle
);
router.get(
  "/nacionalidade",
  isAuthenticated,
  new ListNacionalidadeController().handle
);
router.get(
  "/nacionalidade/edit",
  isAuthenticated,
  new GetEditNacionalidadeController().handle
);
router.put(
  "/nacionalidade/edit",
  isAuthenticated,
  new EditNacionalidadeController().handle
);
//NIVEL SERIE
router.post(
  "/nivelserie",
  isAuthenticated,
  new CreateNivelSerieController().handle
);
router.get(
  "/nivelserie",
  isAuthenticated,
  new ListNivelSerieController().handle
);
router.get(
  "/nivelserie/edit",
  isAuthenticated,
  new GetEditNivelSerieController().handle
);
router.put(
  "/nivelserie/edit",
  isAuthenticated,
  new EditNivelSerieController().handle
);
//PROFESSOR
router.post(
  "/professor",
  isAuthenticated,
  new CreateProfessorController().handle
);
router.get("/professor", isAuthenticated, new ListProfessorController().handle);
router.get(
  "/professor/edit",
  isAuthenticated,
  new GetEditProfessorController().handle
);
router.put(
  "/professor/edit",
  isAuthenticated,
  new EditProfessorController().handle
);
//RESPONSAVEL
router.post(
  "/responsavel",
  isAuthenticated,
  new CreateResponsavelController().handle
);
router.get(
  "/responsavel",
  isAuthenticated,
  new ListResponsavelController().handle
);
router.get(
  "/responsavel/edit",
  isAuthenticated,
  new GetEditResponsavelController().handle
);
router.put(
  "/responsavel/edit",
  isAuthenticated,
  new EditResponsavelController().handle
);

//SALA
router.post("/sala", isAuthenticated, new CreateSalaController().handle);
router.get("/sala", isAuthenticated, new ListSalaController().handle);
router.get("/sala/edit", isAuthenticated, new GetEditSalaController().handle);
router.put("/sala/edit", isAuthenticated, new EditSalaController().handle);
//Serie
router.post("/serie", isAuthenticated, new CreateSerieController().handle);
router.get("/serie", isAuthenticated, new ListSerieController().handle);
router.get("/serie/edit", isAuthenticated, new GetEditSerieController().handle);
router.put("/serie/edit", isAuthenticated, new EditSerieController().handle);
//SITUAÇÃO
router.post(
  "/situacao",
  isAuthenticated,
  new CreateSituacaoController().handle
);
router.get("/situacao", isAuthenticated, new ListSituacaoController().handle);
router.get(
  "/situacao/edit",
  isAuthenticated,
  new GetEditSituacaoController().handle
);
router.put(
  "/situacao/edit",
  isAuthenticated,
  new EditSituacaoController().handle
);
//TIPO CONTRATO
router.post(
  "/tipocontrato",
  isAuthenticated,
  new CreateTipoContratoController().handle
);
router.get(
  "/tipocontrato",
  isAuthenticated,
  new ListTipoContratoController().handle
);
router.get(
  "/tipocontrato/edit",
  isAuthenticated,
  new GetEditTipoContratoController().handle
);
router.put(
  "/tipocontrato/edit",
  isAuthenticated,
  new EditTipoContratoController().handle
);
//TURMA
router.post("/turma", isAuthenticated, new CreateTurmaController().handle);
router.get(
  "/turma/serie/:serieId/:anoLetivo",
  isAuthenticated,
  new ListTurmaSerieController().handle
);
router.get("/turma", isAuthenticated, new ListTurmaController().handle);
router.get("/turma/edit", isAuthenticated, new GetEditTurmaController().handle);
router.put("/turma/edit", isAuthenticated, new EditTurmaController().handle);
//TURMA MODALIDADE
router.post(
  "/turmamodalidade",
  isAuthenticated,
  new CreateTurmaModalidadeController().handle
);
router.get(
  "/turmamodalidade/list",
  isAuthenticated,
  new ListTurmaModalidadeController().handle
);
router.get(
  "/turmamodalidade/edit",
  isAuthenticated,
  new GetEditTurmaModalidadeController().handle
);
router.put(
  "/turmamodalidade/edit",
  isAuthenticated,
  new EditTurmaModalidadeController().handle
);
//TURNO
router.post("/turno", isAuthenticated, new CreateTurnoController().handle);
router.get("/turno", isAuthenticated, new ListTurnoController().handle);
router.get("/turno/edit", isAuthenticated, new GetEditTurnoController().handle);
router.put("/turno/edit", isAuthenticated, new EditTurnoController().handle);
/* USER */
router.post("/user", isAuthenticated, new CreateUserController().handle);
router.post("/auth", new AuthUserController().handle);
router.get("/usuario", isAuthenticated, new ListUsuarioController().handle);
router.get(
  "/usuario/edit",
  isAuthenticated,
  new GetEditUsuarioController().handle
);
router.put(
  "/usuario/edit",
  isAuthenticated,
  new EditUsuarioController().handle
);

export { router };
