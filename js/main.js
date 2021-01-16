// localStorage.setItem('')
var collectData = [];
const $input = document.querySelector('input'),
        $btn = document.querySelector('.addTask > button');
        $form = document.querySelector('form');
$form.addEventListener('submit', addList)
function addList(e) {
      e.preventDefault();
    const $notCom = document.querySelector('.notCompleted');
    const $completed = document.querySelector('.Completed');
    //  create li 
    const newLi = document.createElement('li');
    const btnCheck = document.createElement('button');
    const deleteBtn = document.createElement('button');
    btnCheck.innerHTML = '<i class="fa fa-check"></i>';
    deleteBtn.innerHTML = '<i class="fa fa-trash"></i>';
    if($input.value !== "") {
        newLi.textContent = $input.value; 
        $input.value = "";
        $notCom.appendChild(newLi);
        newLi.appendChild(btnCheck);
        newLi.appendChild(deleteBtn);
    } else{
        alert('please write any task input');
    }
    btnCheck.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        $completed.appendChild(parent);
        btnCheck.style.display = "none";
    });
    deleteBtn.addEventListener('click', function () {
         const parent = this.parentNode;
        parent.remove();
    });
    //  store data task
    var storeData = {
        name:$input
    }
    collectData.push(storeData);
    console.log(collectData);
}
