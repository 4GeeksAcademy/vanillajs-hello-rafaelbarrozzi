import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // function combinacion () {
  //   const pronoun = ["the", "our"]
  //   const adj = ["great", "big"]
  //   const noun = ["jogger", "racoon"]

  //   combinacion.forEach((posicion, indice ) => {
  //     console.log(combinacion)
  //   })
    
  //   };
  
}
function combinacion () {
  const pronoun = ["the", "our"]
  const adj = ["great", "big"]
  const noun = ["jogger", "racoon"]

let combinador = []
for(let i = 0; i<pronoun.length; i++){
  for(let j = 0; j<adj.length; j++){
    for(let k = 0; k<noun.length; k++) {
      combinador.push(pronoun[i] + adj[j] + noun[k]+".com")
    }
    }
}
return combinador
}
console.log(combinacion());

