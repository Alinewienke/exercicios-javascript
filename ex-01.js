function calcularMedia (nota1, nota2) {
    var somaDasNotas = nota1 + nota2 
    var mediaDasNotas = somaDasNotas / 2
    
    return mediaDasNotas
  }
  
  function passouDeAno (nomeDoAluno, nota1, nota2) {
    var notaParaPassar = 7
    
    var media = calcularMedia(nota1, nota2)
    
    if (media < notaParaPassar) {
      return `${nomeDoAluno} não passou`
    } else {
      return `${nomeDoAluno} passou`
    }
  }
  
  passouDeAno('Aline', 9, 7)