

// const card= document.querySelector(".card1")
// const container = document.querySelector(".container")

// for(let i =4;i<=100;i++){
//     const myCard = card.cloneNode();
//     myCard.innerText=i
//     container.appendChild(myCard);
    

// }


const imgUrl= document.querySelector("#img")
const container = document.querySelector(".container")


for(let i =4;i<=100;i++){
  
    let newImgUrl = imgUrl.cloneNode()
    newImgUrl.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`);
    container.appendChild(newImgUrl)

}

