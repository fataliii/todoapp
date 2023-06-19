let btn = document.querySelector('.btn');
let alertbox = document.querySelector('.alertbox');

btn.addEventListener('click', function(){
    let task = document.querySelector('.task-box input').value;

    let h2 = document.createElement('h2');
    let div = document.createElement('div');
    let button = document.createElement('button');

    h2.innerHTML= task;
    button.innerHTML = 'Delete';
    div.setAttribute('class', 'box');
    button.setAttribute('class', 'btn btn-danger delete_btn')

    div.appendChild(h2)
    div.appendChild(button)
    document.querySelector('.task-list').appendChild(div)
    
    alertbox.style.right = '2%'
    alertbox.classList.add('bg-success')
    alertbox.innerHTML = 'Task added'
    setTimeout(() => {
        alertbox.style.right = '-20%' 
    }, 1000);

   let all_btns = document.querySelectorAll('.delete_btn');

   for(let btn of all_btns){
    btn.onclick = function(){
        this.parentElement.remove();
        alertbox.style.right = '2%'
        alertbox.classList.add('bg-danger')
        alertbox.innerHTML = 'Task deleted'
        setTimeout(() => {
            alertbox.style.right = '-20%' 
        }, 1000);
    }
   }
})  