import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario{
    constructor(nome, salrio, cpf){
        super(nome, salrio, cpf);
        this._bonificacao = 1.1
    }
}