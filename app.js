const localizadores = document.querySelector('.localizadores')
let cor = '82CD47'
por = 90

function bateria(cor,porc){
    localizadores.innerHTML = `<p class="localizador" style="color: #${cor};">${porc}%</p>`
    localizadores.innerHTML += `<svg class="localizador" width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.882 0C23.1011 0 29.764 6.47886 29.764 14.4709C29.764 20.4607 25.0686 26.7386 15.8741 33.444C15.2862 33.8727 14.4778 33.8727 13.8899 33.444C4.69545 26.7386 0 20.4607 0 14.4709C0 6.47886 6.6629 0 14.882 0ZM14.882 9.6473C12.1423 9.6473 9.92134 11.8069 9.92134 14.4709C9.92134 17.135 12.1423 19.2946 14.882 19.2946C17.6217 19.2946 19.8427 17.135 19.8427 14.4709C19.8427 11.8069 17.6217 9.6473 14.882 9.6473Z" fill="#${cor}"/></svg>`
}
function iniciar(){
    bateria(cor,por)

    setTimeout(() => {
        cor = 'FFED00'
        por = 50
        bateria(cor,por)
    }, 2000)
    setTimeout(() => {
        cor = 'FFB84C'
        por = 15
        bateria(cor,por)
    }, 4000)
    setTimeout(() => {
        cor = 'E21818'
        por = 0
        bateria(cor,por)
    }, 6000)
}   