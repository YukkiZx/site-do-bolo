// Função para redirecionar
function redirecionar() {
    // URL para a qual você deseja redirecionar
    window.location.href = "https://pt.wikipedia.org/wiki/The_Legend_of_Zelda:_A_Link_to_the_Past";
}

// Adiciona um evento de clique ao botão após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("redirectButton");
    button.addEventListener("click", redirecionar);
});
// Função para mostrar o botão ao rolar
function mostrarBotao() {
    const button = document.getElementById("redirectButton");
    const scrollTop = window.scrollY; // Posição atual do scroll
    const documentHeight = document.documentElement.scrollHeight; // Altura total do documento
    const windowHeight = window.innerHeight; // Altura da janela de visualização

    // Verifica se o usuário rolou até o final da página
    if (scrollTop + windowHeight >= documentHeight) {
        button.style.display = "block"; // Mostra o botão
    } else {
        button.style.display = "none"; // Esconde o botão
    }
}

// Adiciona um evento de scroll ao documento
window.addEventListener('scroll', mostrarBotao);
