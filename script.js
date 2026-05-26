function simularPlanos() {
    // ... (seu código de cálculo de planos) ...

    // --- CONFIGURAÇÃO DO WHATSAPP ---
    const seuNumero = "5511999999999"; // <--- EDITE AQUI
    const msg = `Olá! Vi a promoção no site. Tenho um ${nomeVeiculo} e quero o Plano Essencial.`;
    const linkFinal = `https://wa.me/${seuNumero}?text=${encodeURIComponent(msg)}`;
    
    const botao = document.getElementById("linkWhatsapp");
    
    // Agora o botão sempre funciona, e ao clicar ele abre o link configurado
    botao.onclick = function() {
        window.open(linkFinal, '_blank');
    };
    
    // Feedback visual para o cliente saber que a tabela carregou
    alert("Tabela atualizada! O botão de WhatsApp já está pronto para o seu contato.");
}