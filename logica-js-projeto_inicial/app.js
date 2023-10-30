alert("Boas Vindas ao jogo do número secreto");
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute; 
let tentativas = 1;

//enquanto chute não for igual ao número secreto
while (chute != numeroSecreto){
   chute = prompt("Escolha um número entre 1 e 10");
  
 // se chute for igual ao número secreto 
   if (chute == numeroSecreto) {
      alert (`Isso aí! Voce descobriu o número sercreto ${numeroSecreto} com ${tentativas} tentativas`);
   } else {
      if(chute > numeroSecreto){
         alert(`O Número secreto é menor que ${chute}`);
      } else{
         alert(`O Número secreto é maior que ${chute}`);
      }
   } 
   //tentativas = tentativas + 1
   tentativas++
}
