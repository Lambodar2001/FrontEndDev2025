const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const progress_bar = document.querySelector('.progress-bar')



// const obj={

//     first:{

//             name:'learn js ',
//             completed: false

//     },

//     second:{

//             name:' learn node js ',
//             completed: false
//     },

//     third:{

//             name:'learn dsa',
//             completed: false

//     }
// }


const obj = JSON.parse(localStorage.getItem("objectKey")) || {

    
    first:{

            name:'',
            completed: false

    },

    second:{

            name:'',
            completed: false
    },

    third:{

            name:'',
            completed: false

    }
}

checkBoxList.forEach((checkbox) => {

    checkbox.addEventListener('click', (e) => {



        const allFieldsFilled = [...inputFields].every((input) => {

            return input.value
        })


        if (allFieldsFilled) {

            checkbox.parentElement.classList.toggle('completed')
            const inputId= checkbox.nextElementSibling.id
            console.log(inputId);



        } else {

            progress_bar.classList.toggle('show-error')
        }




    })

})


inputFields.forEach((input)=>{

    if(obj[input.id].completed){

        input.parentElement.classList.add('completed')
    }

    input.value=obj[input.id].name


    input.addEventListener('focus', ()=>{
        console.log(e.target.value);
        progress_bar.classList.remove('show-error')
    })

    input.addEventListener('input', (e)=>{

       
       
        obj[input.id]={

            name:input.value,
            completed:false
        }

        localStorage.setItem("objectKey", JSON.stringify(obj))
      
    })
})