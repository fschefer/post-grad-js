const mensagem = mensagemMisteriosa();

if (mensagem != "Sucesso") {
    console.log("O teste falhou");
} else {
    console.log("O teste passou");
}

const idade = 18;

if (idade >= 12 && idade < 18) { 
    console.log("teenager");
} else if (idade < 12 && idade >= 0) {
    console.log("child");
} else if (idade >= 18) {
    console.log("adult");
} else {
    console.log("invalid number");
}

const nome = prompt("Nos diga seu nome")

if (nome == "Arabella"){
    console.log("Welcome")
} else if(nome == "Flávio") {
    console.log("Bem-vindo")
} else {
    console.log ("Você não pode vir aqui")
}

const gato = prompt("Quem é você?")
if (gato == "Citrino" || gato == "Artemis" || gato == "Kali" || gato == "Nêmesis"){
    console.log("Olá, meninos")
} else {
    console.log ("Você é algum outro gato!")
}