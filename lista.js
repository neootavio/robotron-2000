lista = document.querySelectorAll(".lista .item");



mostraTinta(){
    lista.forEach(item => {

        item.innerHtml = "";
        
    });
}