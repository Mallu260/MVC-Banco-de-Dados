import { Router } from "express";
import { getProdutos,

 } from "../controllers/produtoControllers";

 const router = Router();

 router.get('/produtos' ,getProdutos)


export default router;
