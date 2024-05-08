import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./routes";

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });
app.use(express.json());
app.use('/images', express.static('src/assets/images'));

app.use(cors())
app.use(router);
const PORT = 21084;
const IP_ADDRESS = "192.168.1.7"; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 