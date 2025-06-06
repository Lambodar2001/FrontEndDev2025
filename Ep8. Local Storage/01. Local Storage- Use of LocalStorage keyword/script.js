//How to store form data in localStorage
//see usigin chrom dev tool--> Application-->local storage -->click on local ip 


const form = document.querySelector("form");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
    let userInp = formData.get("name");

    localStorage.myName = userInp;
    //this part create myName Key in local storage and put value userip in it 
    let finalinp = userInp;


    output.innerText= finalinp




});
