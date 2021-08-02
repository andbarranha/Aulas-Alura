import {Cliente} from "./Cliente.js";
import {Gerente} from "./Funcionarios/Gerente.js";
import {Diretor} from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 1000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente ("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("123")

const cliente = new Cliente("Lais", 789456612379, "456");
const gerenteEstalogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstalogado = SistemaAutenticacao.login(diretor, "123456");
console.log(gerenteEstalogado, diretorEstalogado);

const clienteEstalogado = SistemaAutenticacao.login(cliente, "456");
