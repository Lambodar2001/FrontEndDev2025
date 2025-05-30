// **** 1) e.stopPropagation();
// **** 2) {onece: true}




const outer = document.querySelector('.outer')
const inner = document.querySelector('.inner')


outer.addEventListener('click', (e)=>{
    console.log('out clicked');
},{once:true})




inner.addEventListener('click', (e)=>{
    console.log('in clicked');
        e.stopPropagation();

})