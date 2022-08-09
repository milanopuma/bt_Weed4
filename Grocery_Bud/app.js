const form = document.querySelector('.form');
const grocery = document.getElementById('grocery');
const btn = document.querySelector('.form-btn');
const container = document.querySelector('.container');
const list = document.querySelector('.list');
const clear = document.querySelector('.clear-item');

const clearItem = () => {
    list.innerHTML = ''
}

clear.addEventListener("click",clearItem)

const btnClick = () => {
    if(grocery.value !== '' && grocery.value !== null){
        const div = document.createElement('div')
        div.classList.add('grocery-item');
        const item = `
            <p class="title">${grocery.value}</p>
            <div class="btn-container">
                <button class="edit-btn">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `
        div.innerHTML = item;
        grocery.value = '';
        list.appendChild(div);
    }
}

const inputKeyDown = (e) => {
    if(e.keyCode === 13){
        btnClick();
    }
}

grocery.addEventListener('keydown',inputKeyDown)
btn.addEventListener("click",btnClick)



const deletebtn = document.querySelector('.delete-btn');
const editbtn = document.querySelector('edit-btn')

deletebtn.addEventListener('click',deleteIteam)

const deleteIteam = () =>{
    
}