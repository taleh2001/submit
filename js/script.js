
let burger = document.querySelector('.header__burger')
let menu = document.querySelector('.header__menu')
let link = document.querySelectorAll('a.header__link')

document.addEventListener('click', burgers)




// link.addEventListener('click',()=>{
//     
// })

function burgers(event) {

    if (event.target.closest('.header__burger')) {
        burger.classList.toggle('active')
        menu.classList.toggle('active')       
    }
    if (!event.target.closest('.active')) {
        burger.classList.remove('active')
        menu.classList.remove('active')
    }

    link.forEach((e)=>{
        e.addEventListener('click',()=>{      
                burger.classList.remove('active')
                menu.classList.remove('active')        
            })
    })

}




