// 1. Crie uma função que recebe 3 notas de um aluno por parâmetro e
// uma letra. Se a letra for A a função deve calcular a média aritmética,
// se for P, a média ponderada (peso: 5, 3 e 2).

const n1 = 3
const n2 = 3
const n3 = 3
const l = 'a'


function calMedia (n1, n2, n3, l){
    if (l == 'a'){
        const mediaAritmetica = (n1 + n2 + n3) / 3
        return mediaAritmetica
    } if (l == 'p'){
        const mediaPonderada = (n1 * 5 + n2 * 3 + n3 * 2) / (5 + 3 + 2);
        return mediaPonderada
    } else {
        console.log('Resposta indisponível')
    }}

const media = calMedia(n1, n2, n3, l)
console.log(`A média do aluno: ${media}`)

// 2. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// for ímpar ou falso se for par.

let numero = 7

function valorInteiro(numero) {
    if (numero % 2 === 0) 
        console.log('É par')       
        console.log('É ímpar')           
}

valorInteiro(numero)

// 3. Crie uma função que recebe por parâmetro um valor inteiro e
// positivo e retorne verdadeiro se o número for primo ou falso se não
// for.

function ePrimo(numero) {
  if (numero <= 1) {
    return false;
  }
    
  for (let i = 2; i * i <= numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
    
  return true;
}

// 4. Crie uma função que recebe por parâmetro o tempo de duração de
// uma fábrica expressa em segundos e retorna esse tempo em horas,
// minutos e segundos.
// Ex:
// Entrada: 3672
// Saída: 1:1:12

function tempo (segundos) {
return {
segundos: segundos,
minutos: segundos / 60,
horas: segundos / 60 / 60
}
}
console.log(tempo(3672))


// 5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
// é um valor perfeito ou falso se não for. Um valor é dito perfeito quando ele é igual a soma dos seus divisores excetuando ele próprio.
// Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

let inteiro = parseInt(4)

function perfectNumber(inteiro) {
let somaDivisores = 0

for (let i = 1; i < inteiro; i++) {
if (inteiro % i === 0) {
    somaDivisores += i
}
}

return somaDivisores === inteiro
}

let resultado = perfectNumber(inteiro)
console.log(resultado)



// 6. Crie uma função chamada acessoAoSite() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará um alerta informando “Bem vindo ao site”.

function acessoAoSite() { 
    alert('Bem vindo ao site')
}
acessoAoSite()


// 7. Crie uma função chamada mostrarMensagem() que não tenha
// parâmetro. Esta função será chamada ao abrir a página e mostrará
// uma mensagem no console.log() informando “Acesso à aplicação
// NomeAplicação” e um alerta informando “Bem vindo à aplicação
// NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
// uma variável para mostrar nas mensagens.

const nomeAplicacao = "GROWDEV"
   

function mostrarMensagem(){
    console.log(`Acesso à aplicação ${nomeAplicacao}`)
    alert(`Bem vindo a aplicação ${nomeAplicacao}`)
}

mostrarMensagem()

// 8. Crie uma função chamada mostrarDobro(num), que recebe um
// parâmetro sendo um número inteiro. Esta função será chamada ao
// abrir a página e mostrará um alerta com o resultado. Exemplo: “O
// dobro do número 5 é 10.”

let intNumero = 12
intNumero = parseInt(intNumero)

function dobro(intNumero){
    alert(`O dobro do número ${intNumero} é ${intNumero * 2}`)
}

dobro(intNumero)

// 9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
// nome), que recebe 4 parâmetros sendo três inteiros e um texto
// (String). Esta função será chamada ao abrir a página e mostrará um
// alerta com a média. Exemplo: “João, sua média é 70.” A função
// também deve mostrar no console.log() as notas recebidas. Exemplo
// “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

let notas1 = parseInt (60)
let notas2 = parseInt (70)
let notas3 = parseInt (80)
let nome = 'Ester'

function calcularMedia(notas1, notas2, notas3, nome) {
    let media = ((notas1 + notas2 + notas3) /3)
    alert(`${nome}, sua média é ${media}`)
    console.log(`Nota 1: ${notas1}, Nota 2 :${notas2}, Nota 3: ${notas3}`)
}

calcularMedia(notas1, notas2, notas3, nome)