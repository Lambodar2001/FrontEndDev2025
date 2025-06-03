const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const progress_bar = document.querySelector('.progress-bar')

checkBoxList.forEach((checkbox) => {

    checkbox.addEventListener('click', (e) => {



        const allFieldsFilled = [...inputFields].every((input) => {

            return input.value
        })


        if (allFieldsFilled) {

            checkbox.parentElement.classList.toggle('completed')



        } else {

            progress_bar.classList.add('show-error')
        }




    })

})


inputFields.forEach((input)=>{

    input.addEventListener('focus', ()=>{

        progress_bar.classList.remove('show-error')

    })
})