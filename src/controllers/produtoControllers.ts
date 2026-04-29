import { ProdutoModel } from './../models/produtoModels';
import { Request, Response } from "express";

const produtoModel = new ProdutoModel()

export const getProdutos =
async(req: Request, res:Response)=> {

    try {

        const produtos = await produtoModel.getAll();
        res.json(produtos)

    } catch (error) {
        res.status(500).json({message:'Erro ao buscar prdutos',error})
    }
}