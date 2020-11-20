btn[0].addEventListener("click", function () {
    let nomeVal = document.getElementById("campoNome").value;
    let sobreNomeVal = document.getElementById("campoSobreNome").value;
    if (nomeVal == false || sobreNomeVal == false) {
        alert("Preencha os Campos");
        return false;
    } else {
        let certeza = confirm("Se às informações estiverem corretas, clique em 'OK' ");
        if (certeza == true) {
            console.log("Informações Validadas")
            alert("Validado Com Sucesso");
            btn[0].disabled = true;
            btn[1].disabled = false;
            btn[2].disabled = false;
            espaco[0].disabled = true;
            espaco[1].disabled = true;
            return true;
        }else{
            alert("Arruma ai então")
        }

    }
});
btn[1].addEventListener("click", function () {
    let nome = document.getElementById("campoNome").value;
    let sobrenome = document.getElementById("campoSobreNome").value;
    alert(`${nome} ${sobrenome}`);
    console.log(`Nome completo: ${nome} ${sobrenome}`);
    btn[0].disabled = true;
});
btn[2].addEventListener("click", function () {
    console.log("Hummmmm executou o troca troca né")
    btn[2].disabled = true;
    btn[3].disabled = false;
    troca();
    let comeca = setInterval(troca, 2000);
    btn[3].addEventListener("click", function () {
        btn[2].disabled = false;
        btn[3].disabled = true;
        clearInterval(comeca);
        console.log("Pediu pra Parar parou")
    });
});