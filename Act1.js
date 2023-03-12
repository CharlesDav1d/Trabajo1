function act1(){
    const arreglo = [ 2, 8, 1, 9, 5];
  let encontrado = false;
  
  for (let uno = 0; uno < arreglo.length && !encontrado; uno++) {
    for (let dos = uno + 1; dos < arreglo.length && !encontrado; dos++) {
      if (arreglo[uno] + arreglo[dos] === 10) {
        console.log(`${arreglo[uno]} ${arreglo[dos]}`);
        encontrado = true;
      }
    }
  }
  
  if (!encontrado) {
    console.log("No hay elementos que sumen 10");
  }
  
  }
  function act2(){
    var contador = 0;
    var contadormax = 0;
    var Numayor = 0;
    
    const arreglo = [1,2,2,5,4,4,4,4,6,7,8,8,8]
     for (let i = 0 ; i < 10 ; i++) {
       for (let j = 0 ; j < arreglo.length ; j++){
         if (i == arreglo [j] ){
           contador ++;
           
         }
       }
       if (contador > contadormax){
         contadormax = contador;
         Numayor = i;
       }
       contador = 0;
     }
     console.log("El numero que mas se repite es " + Numayor);
     console.log("Se repite  " + contadormax + " veces");
     
     
     
  }
   
   
  function act3(){
    const arreglito = [1,2,1,3,3,1,2,1,5,1]
    asterisco = ""
    for (let i = 0 ; i < 6 ;  i++){
      for (let j = 0 ; j < 11 ;j++){
        if (i == arreglito [j] ){
          asterisco+="*"
        }
      }
      console.log(i+" ="+asterisco)
      asterisco=""
    }
    alert("Revise la consola")
  }