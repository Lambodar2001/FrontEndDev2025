
const inputName = document.querySelector(".inputName");
const inputAge= document.querySelector(".inputAge");

const outputName = document.querySelector(".outputName");
const outputAge = document.querySelector(".outputAge");
const clearbtn = document.querySelector(".clear");

// const inputAge = document.querySelector(".inputAge");
// const outputAge = document.querySelector(".outputAge");


const obj = JSON.parse(localStorage.getItem('objData')) || {
    myName:'',
    myAge:''
}


if(obj.myName ){
   outputName.innerText =obj.myName
}


if(obj.myAge ){
   outputAge.innerText =obj.myAge
}



inputName.addEventListener('input', (e)=>{
    
    obj.myName=e.target.value
    localStorage.setItem('objData',JSON.stringify(obj))
    outputName.innerText =e.target.value
   
     

})

inputAge.addEventListener('input', (e)=>{
    
    obj.myAge=e.target.value
    localStorage.setItem('objData',JSON.stringify(obj))
    outputAge.innerText =e.target.value
    


})






clearbtn.addEventListener('click', ()=>{
    localStorage.clear()
})

