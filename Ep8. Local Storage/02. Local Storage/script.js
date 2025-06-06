//How to store form data in localStorage
//see usigin chrom dev tool--> Application-->local storage -->click on local ip 


// localStorage.setItem("name", "Rahul");      // Save
// let name = localStorage.getItem("name");    // Get
// localStorage.removeItem("name");            // Delete
// localStorage.clear();                       // Clear all
   



                 //simple way of get, set in value in key 

const inputName = document.querySelector(".inputName");
const inputAge = document.querySelector(".inputAge");
const outputAge = document.querySelector(".outputAge");
const outputName = document.querySelector(".outputName");

const btnForCLearMyName = document.querySelector(".btnForCLearMyName");
const btnForCLearMyAge = document.querySelector(".btnForCLearMyAge");
const btnForClearall = document.querySelector(".btnForClearall");

// input.addEventListener('input', (e) => {
//     e.preventDefault();

//     let userInp = e.target.value
//     localStorage.myName=userInp                  //set loaclStorgae value
//     output.innerText=localStorage.myName         //get localStorage value 
// });

                //USe of get set method 

inputName.addEventListener('input', (e)=>{
    
    localStorage.setItem('myName',e.target.value) 
    outputName.innerText=localStorage.getItem('myName')

})

inputAge.addEventListener('input', (e)=>{

      localStorage.setItem('myAge',e.target.value) 
      outputAge.innerText=localStorage.getItem('myAge')

})


// localStorage.removeItem("name");            // Delete
// localStorage.clear();                       // Clear all

btnForClearall.addEventListener('click', ()=>{
    
    localStorage.clear()
})



btnForCLearMyName.addEventListener('click', (e) => {
    e.preventDefault(); // Add this if button is inside <form>
    localStorage.removeItem("myName");
});

btnForCLearMyAge.addEventListener('click', (e) => {
    e.preventDefault(); // Add this if button is inside <form>
    localStorage.removeItem("myAge");
});

