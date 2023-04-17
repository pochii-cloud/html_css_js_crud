let form = document.getElementById('form');
let input = document.getElementById('input');
let errormsg = document.getElementById('errormsg');
let tasks = document.getElementById('tasks');


form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
        errormsg.innerHTML = "Please enter a task";
    }
    else {
        tasks.innerHTML += `
        <ul>
        <li>${input.value}
    <span>
        <i onClick="EditPost(this)"class="fas fa-edit"></i>
      <i onClick="DeletePost(this)" class="fas fa-trash-alt"></i>
    </span>
     </ul>`;
        input.value = "";
    }

});

function DeletePost(e){
    e.parentElement.parentElement.remove();
}
function EditPost(e){
   input.value=e.parentElement.previousElementSibling.innerHTML;
   e.parentElement.parentElement.remove();
}