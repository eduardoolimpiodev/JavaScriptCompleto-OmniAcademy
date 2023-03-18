let idade = 19;
let permissaoDirigir;

if(idade >= 18) {
    permissaoDirigir = true;
} else {
    permissaoDirigir = false
}

console.log(permissaoDirigir ? 'true' : 'false');

// OU

let permissaoDirigir2 = idade > 18 ? true : false;

// Exemplo 2:

let emailValido = true;
let senhaValida = true;
let credenciaisValidas = emailValido ? (senhaValida ? "Credenciais válidas" : "Senha inválida") : "Email Inválido";
console.log(credenciaisValidas);