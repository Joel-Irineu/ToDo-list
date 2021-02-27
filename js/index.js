const addButton = document.querySelector('.addButton')
let input = document.querySelector('.input')
const container = document.querySelector('.container')



class item{
    constructor(itemName){
        // create the item div
        this.createDiv(itemName)
    }

    createDiv(itemName){
        let input = document.createElement('input')
        input.value = itemName
        input.disabled = true
        input.classList.add('item_input')
        input.type = 'text'

        let itemBox = document.createElement('button')
        itemBox.classList.add('item')

        let editButton = document.createElement('button')
        editButton.innerHTML = '<i class="fas fa-edit"></i>'
        editButton.classList.add('editButton')

        let removeButton = document.createElement('button')
        removeButton.innerHTML = '<i class="fas fa-trash-alt"></i>'
        removeButton.classList.add('removeButton')

        container.appendChild(itemBox)
        itemBox.appendChild(input)
        itemBox.appendChild(editButton)
        itemBox.appendChild(removeButton)

        editButton.addEventListener('click', ()=> this.edit(input))
        removeButton.addEventListener('click', ()=> this.remove(itemBox))
        input.addEventListener('keydown', (e)=>{
            if(e.which == 13){
                this.disable(input)
            }
        })
    }

    edit(input){
        input.disabled = !input.disabled
    }

    remove(item){
        container.removeChild(item)
    }

    disable(input){
        input.disabled = true
    }
}
function check(){
    if(input.value !== ''){
        new item(input.value)
        input.value = ''
    }
}


addButton.addEventListener('click', check)
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        check()
    }
})

