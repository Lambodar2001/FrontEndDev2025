// 1.Event delgation 



// brute Force
// const container= document.querySelector('.container')
// const card= document.querySelector('.card')
// const btn= document.querySelector('.btn')

// btn.addEventListener('click', (e)=>{
//     const newCard = card.cloneNode();
//     container.appendChild(newCard)

//     newCard.addEventListener('click', ()=>{
//         newCard.remove()
//     })


// })


const container= document.querySelector('.container')
const card= document.querySelector('.card')
const btn= document.querySelector('.btn')

btn.addEventListener('click', (e)=>{
    const newCard = card.cloneNode();
    container.appendChild(newCard)

    newCard.addEventListener('click', ()=>{
        newCard.remove()
    })


})


container.addEventListener('click', (e)=>{


    if(e.target.classList.contains('card')){

        e.remove();


    }
    
})




