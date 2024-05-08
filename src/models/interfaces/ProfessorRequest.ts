export interface ProfessorRequest {
  id: string;
  nome: string;
  telefoneComercial: string;
  telefoneCelular: string;
  email: string;
  senha: string;
  lancarNotaRetroativa: boolean;
  ativo: boolean;
}
