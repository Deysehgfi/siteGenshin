
document.addEventListener('DOMContentLoaded' , ()=>{
    const urlParam = new URLSearchParams(window.location.search)
    
    const paramIndex= urlParam.get('index')
   
  const url = `https://gsi.fly.dev/characters/${parseInt(paramIndex)+1}/`
    
    fetch(url)
    .then((Response)=>{
         if(!Response.ok){
             throw new Error('Erro perso ')
             
     }
         return Response.json()
     })
    .then((data)=>{
        console.log(data)

      personagemDados(data)})
  

    
    function personagemDados(item){
        const personagemImg = document.querySelector('.img-personagem')
        const nome = document.querySelector('.nome')
        const tipoModelo = document.querySelector('.tipo_modelo')
        const raridade = document.querySelector('.raridade')
        const arma= document.querySelector('.arma')
        const titulo = document.querySelector('.titulo')
        const visao= document.querySelector('.visao')
        const aniversario =document.querySelector('.aniversario')
        const regiao =document.querySelector('.regiao')
       
    
    personagemImg.src = `./img/foto${paramIndex}.jpg` 

    nome.innerHTML =`${item.result.name}`
    tipoModelo.innerHTML =`TIPO DE MODELO: ${item.result.model_type}`
    raridade.innerHTML =`RARIDADE: ${item.result.rarity}`
    arma.innerHTML =`ARMA: ${item.result.weapon}`
    titulo.innerHTML =`TITÚLO: ${item.result.title}`
    visao.innerHTML =`VISÃO: ${item.result.vision}`
    aniversario.innerHTML =`ANIVERSÁRIO: ${item.result.birthday}`
    regiao.innerHTML =`REGIÃO: ${item.result.region}`
    }})

    
// document.addEventListener('DOMContentLoaded' , ()=>{
//   const urlParam = new URLSearchParams(window.location.search)
  
//   const paramIndex= urlParam.get('index')
//   paramIndex= 10
 
// const url = `https://gsi.fly.dev/characters/${parseInt(paramIndex)+1}/`
  
//   fetch(url)
//   .then((Response)=>{
//        if(!Response.ok){
//            throw new Error('Erro perso ')
           
//    }
//        return Response.json()
//    })
//   .then((data2)=>{
//       console.log(data2)

//     personagemDados(data2)})


  
//   function personagemDados(item){
//       const personagemImg = document.querySelector('.img-personagem')
//       const nome = document.querySelector('.nome')
//       const tipoModelo = document.querySelector('.tipo_modelo')
//       const raridade = document.querySelector('.raridade')
//       const arma= document.querySelector('.arma')
//       const titulo = document.querySelector('.titulo')
//       const visao= document.querySelector('.visao')
//       const aniversario =document.querySelector('.aniversario')
//       const regiao =document.querySelector('.regiao')
     
  
//   personagemImg.src = `./img/foto${paramIndex}.png` 

//   nome.innerHTML =`${item.result.name}`
//   tipoModelo.innerHTML =`TIPO DE MODELO: ${item.result.model_type}`
//   raridade.innerHTML =`RARIDADE: ${item.result.rarity}`
//   arma.innerHTML =`ARMA: ${item.result.weapon}`
//   titulo.innerHTML =`TITÚLO: ${item.result.title}`
//   visao.innerHTML =`VISÃO: ${item.result.vision}`
//   aniversario.innerHTML =`ANIVERSÁRIO: ${item.result.birthday}`
//   regiao.innerHTML =`REGIÃO: ${item.result.region}`
//   }})



    