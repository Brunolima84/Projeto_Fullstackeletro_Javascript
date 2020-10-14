function exibir_eletro(produtos) {

    let itens = document.getElementsByClassName('fotos_produtos');
    console.log(itens);
    for (let i = 0; i < itens.length; i++) {
        console.log(itens[i].id)
        if (produtos == itens[i].id)
        itens[i].style = "display:block";
        else
        itens[i].style = "display:none";
    }

}