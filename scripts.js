document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Captura os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Exibe uma mensagem de feedback
    document.getElementById('feedback').textContent = `Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`;
    
    // Limpa o formulário
    this.reset();
});
