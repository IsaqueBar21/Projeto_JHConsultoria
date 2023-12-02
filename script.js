// // variaveis do elemento HTML

// // id header - menu superior
var header = document.getElementById('header');

// // id navigation_header - paginas menu superior
var navigationHeader = document.getElementById('navigation_header');


// //id content - conteudo
var content = document.getElementById('content');

//variavel que armazena o estado do menu lateral
// inicia fechado
var showSidebar = false;

// função que abre o menu lateral
function toggleSidebar() {

    //muda o estado sempre que for clicado
    showSidebar = !showSidebar;

    // verificação de condição do menu lateral
    if (showSidebar) {

        // muda a margin lateral do menu fazendo com que apareça na tela
        navigationHeader.style.marginLeft = '-10vw';

        //animação durante a abertura do menu
        navigationHeader.style.animationName = 'showSidebar';

        // adiciona um filtro onde irá deixar o conteúdo opaco ao abrir o menu lateral
        content.style.filter = 'blur(2px)';

    } else {

        // muda a margin lateral escondendo o menu para a esquerda
        navigationHeader.style.marginLeft = '-100vw';
        // cancela a animação de abertura
        navigationHeader.style.animationName = '';
        // cancela o filtro de opacidade do conteudo
        content.style.filter = '';
    }
}

// função que fecha o menu lateral quando clicamos no conteúdo da página
function closeSidebar() {
    // verifica se o menu esta aberto
    if (showSidebar) {
        // se estiver aberto fechar o menu            
        toggleSidebar();
    }
}

//verificar o tamanho da tela e caso esteja maior que 768px remover o efeito blur e fechar o menu lateral
window.addEventListener('resize', function (event) {
    if (window.innerWidth > 768 && showSidebar) {
        showSidebar = true;
        toggleSidebar();
    }
})

