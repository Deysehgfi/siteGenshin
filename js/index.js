




document.addEventListener('DOMContentLoaded' , ()=>{
     const baseURL ="https://gsi.fly.dev/characters"

    fetch(baseURL)
     .then((Response)=>{
         if(!Response.ok){
             throw new Error('erro de rede! código:'+Response.status)

} return Response.json()    })


  .then((data)=>{
        console.log(data.results[0].name)
        ListarPersonagens(data)
     })     .catch((err)=>console.log(err))
 })

 
 function ListarPersonagens(items){
     const container = document.getElementById('personagem-container')
   items.results.forEach((item, index)=>{
    const divPersonagens = document.createElement('div')
    divPersonagens.innerHTML= `
    <div class = "personagem-caixa">
         <img class="img-personagem" src= "./img/foto${index}.jpg">
        <div> 
            <h3 class="name-person">${item.name}</h3>
            

         </div> 
    </div>`;
  divPersonagens.addEventListener('click',()=>{ 
   detalhesPersonagem(index)
   })
    divPersonagens.classList.add('personagem')
    container.appendChild(divPersonagens)

  })
   console.log(items) 
 }

function detalhesPersonagem(index){
  window.location.href= `./person.html?index=${index}`}