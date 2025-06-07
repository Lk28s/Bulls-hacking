function toggleInfo(infoId) {
    const info = document.getElementById(infoId);
    info.style.display = info.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('support-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o suporte por e-mail
    alert('Mensagem de suporte enviada!');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticação
    alert('Login realizado com sucesso!');
});
