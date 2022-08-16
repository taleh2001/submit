const array = []
const textInput = document.querySelector('#text')
const btn = document.querySelector('#btn')
const title = document.querySelector('.title')
const delBtn = document.querySelector('#delBtn')

function todoList(text){
    const list = {
        text,
        bool: false,
        id: `${Math.random()}`
    }

    
    array.push(list)
    
}

function deleteList(id){
    array.forEach(todo => {
        if(todo.id === id){
            todo.bool = true
        }
    })
}

function readText(){
    btn.addEventListener('click', () => {
        
        

        todoList(textInput.value)
       
        readText2()

        textInput.value = ''
        
        
    })
}

function readText2(){
    
    let html = ''

    array.forEach(todo =>{
        if(todo.bool){
            return
        }

        html += `
        <div>
        ${todo.text}
        <button data-id='${todo.id}'>Сделано</button>
        </div>
        `
    } )

    title.innerHTML = html

    console.log(array)
    
}


title.addEventListener('click', (event)=>{
    if(event.target.tagName !== 'BUTTON'){
        return
    }

    const id = event.target.dataset.id

    deleteList(id)


    readText2()
    
})




readText()
readText2()


