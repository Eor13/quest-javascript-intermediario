// Passo 1 - encontra um jeito de buscar os inputs.
const btn = document.querySelector(".btn");
const valid = document.querySelectorAll(".valid");

// Passo 2 - dar um jeito de identificar o clique no botão
btn.addEventListener("click", function(){
    const field = document.querySelectorAll(".field");
    // Passo 3 - Ao clicar para enviar o formulário, 
    field.forEach(function(input,indice){
        checkFill(input,indice);
    });
});

// Passo 4 - se caso algum campo não estiver preenchido, a borda do input deve ficar vermelha e uma mensagem de "campo obrigatório" deve aparecer embaixo do campo que não foi preenchido, conforme o figma.
function checkFill(input,indice){
    if(input.value !== ""){
        input.classList.add("filled-field");
        input.classList.remove("required-field");
        valid[indice].classList.remove("required");
        valid[indice].classList.add("valid");
    }else if(input.value === ""){
        input.classList.remove("filled-field");
        input.classList.add("required-field");
        valid[indice].classList.remove("valid");
        valid[indice].classList.add("required");
    };
};