// Desabilitar o clique direito do mouse na página
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

// Impedir que o usuário pressione as teclas CTRL + U (visualizar código-fonte)
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
    }
});
