// OLÁ MUNDO

//EXERCICIO 1
// let palavraUm : string = "amadurecida"
// let palavraDois : string = "agradecida"

// console.log(VerificarPalavra(palavraUm, palavraDois))

// function VerificarPalavra(paramentroUm:string, parametroDois:string): boolean{
//     let resultado : boolean = false
//     let arrayUm:string[] = paramentroUm.split("")
//     let arrayDois:string[] = parametroDois.split("")
//     let tamanhoUm : number = arrayUm.length
//     let tamanhoDois : number = arrayDois.length

//     console.log(arrayUm)
//     console.log(arrayDois)

//     if(arrayUm[tamanhoUm - 3] == arrayDois[tamanhoDois - 3] && arrayUm[tamanhoUm - 2] == arrayDois[tamanhoDois - 2] && arrayUm[tamanhoUm - 1] == arrayDois[tamanhoDois - 1]){
//         resultado = true
//         return resultado
//     }

//     return resultado
   
// }

//EXERCICIO 2

let palavra : string = "teste"

console.log(ContarCaractere(palavra))

function ContarCaractere(parametro:string): string{
   let parametroArray: string[] = parametro.split("")
   let arrayFinal: string[] = []

   parametroArray.forEach(x => {
    let contador: string[] = parametroArray.filter(y => y == x)
    if(contador.length == 1){
        arrayFinal.push("(")
    }
    else{
        arrayFinal.push(")")
    }
   })
   return arrayFinal.join("")
}