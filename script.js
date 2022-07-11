

let [input1, input2]= document.querySelectorAll('input')
let acesso = document.querySelector('button')
input1.addEventListener('input',hadleChange)
input2.addEventListener('input',hadleChange)

function hadleChange(){
    if(input1.value && input2.value.length >= 8 ){
        acesso.classList.add('vermelho')
    } else{
        acesso.classList.remove('vermelho')
    }
}