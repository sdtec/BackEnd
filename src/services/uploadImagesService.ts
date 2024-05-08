import multer from 'multer';
import path from 'path';

// Configuração do multer para definir onde os arquivos serão salvos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Define o diretório de destino como a pasta 'images'
    cb(null, path.join(__dirname, '../images/imagesAluno'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Função de filtro para permitir apenas imagens
const fileFilter = (req, file, cb) => {
  // Verifica se o arquivo é uma imagem
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Aceita o arquivo
  } else {
    cb(new Error('Apenas arquivos de imagem são permitidos.'), false); // Rejeita o arquivo
  }
};

// Configuração do multer com as opções de armazenamento e filtro
const upload = multer({ storage: storage, fileFilter: fileFilter });

class UploadFotoAlunoService {
  // Método para fazer upload da foto do aluno
  async uploadFoto(req, res) {
    // Chama a função 'single' do multer para lidar com o upload de um único arquivo
    // O parâmetro 'foto' é o nome do campo no formulário onde a imagem está sendo enviada
    upload.single('foto')(req, res, (err) => {
      if (err) {
        // Se ocorrer um erro durante o upload, retorna um erro
        return res.status(400).json({ error: err.message });
      }
      // Se o upload for bem-sucedido, retorna o caminho do arquivo salvo
      return res.status(200).json({ filePath: req.file.path });
    });
  }
}

export default UploadFotoAlunoService;