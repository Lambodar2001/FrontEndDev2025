  // problem 01: 
// const container= document.querySelector('.container')
// const btn= document.querySelector('.btn')

// btn.addEventListener('click',(e)=>{

//   e.preventDefault();
//   container.style.display='block';

// })
//----------------------------------------------------------------------------------


const container= document.querySelector('.container')
const dropdown= document.querySelector('.dropdown')

container.addEventListener('contextmenu',(e)=>{

  e.preventDefault();
  dropdown.style.display='block';


  dropdown.style.top=`${e.pageY}px`;
  dropdown.style.left=`${e.pageX}px`;
  

})

document.addEventListener('click', ()=>{

  dropdown.style.display='none'
})