

const block= document.querySelector('.container')

for(let i =1;i<=100;i++){

    const newImg = document.createElement('img')
    newImg.style.cssText="height:100px; width: 100px;"
    const text= document.createElement('p')

    newImg.src= `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/${i}.png`
    text.innerText=i
    block.append(newImg, text)

}
