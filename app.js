let inputPass = document.getElementById('form-pass');
let iconPass = document.getElementById('pass-icon');

iconPass.addEventListener('click',()=>{
    if(inputPass.getAttribute('type') === "password"){
        inputPass.setAttribute('type','text');
    }else {
        inputPass.setAttribute('type','password');
    }
});
