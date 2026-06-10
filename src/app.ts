import cors from "cors";
import express from "express";
import produtoRoutes from "./routes/produtoRoutes";
import { pool } from "./config/database";
import path from "path";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

// Arquivos estáticos
app.use(express.static(path.join(__dirname, "views")));

// Página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Rotas da API
app.use("/api", produtoRoutes);

pool.getConnection()
  .then(() => {
    console.log("Conectado ao MySQL.");

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((erro: any) => {
    console.error("Erro ao conectar ao MySQL:", erro);
  });