function simularPlanos() {
    const select = document.getElementById("tipoVeiculo");
    const tipo = select.value;
    const nomeVeiculo = select.options[select.selectedIndex].text;
    const areaPlanos = document.getElementById("areaPlanos");
    
    // Tabela de preços
    const tabela = {
        leves: { "12 Meses": "R$ 79,00", "24 Meses": "R$ 75,90", "36 Meses": "R$ 69,90", "48 Meses": "R$ 62,90" },
        utilitarios: { "12 Meses": "R$ 129,90", "24 Meses": "R$ 122,90", "36 Meses": "R$ 116,90", "48 Meses": "R$ 110,90" },
        vans: { "12 Meses": "R$ 179,90", "24 Meses": "R$ 170,90", "36 Meses": "R$ 162,90", "48 Meses": "R$ 154,90" }
    };

    let html = `<div class="card-simulador"><h3>Tabela: ${nomeVeiculo}</h3><ul>`;
    for(let plano in tabela[tipo]) {
        html += `<li><strong>${plano}:</strong> ${tabela[tipo][plano]}/mês</li>`;
    }
    html += `</ul></div>`;
    areaPlanos.innerHTML = html;

    // --- CONFIGURAÇÃO DO WHATSAPP ---
    const seuNumero = "5511999999999"; // <--- EDITE AQUI
    const msg = `Olá! Vi a promoção no site. Tenho um ${nomeVeiculo} e quero o Plano Essencial.`;
    const linkFinal = `https://wa.me/${seuNumero}?text=${encodeURIComponent(msg)}`;
    
    const botao = document.getElementById("linkWhatsapp");
    
    // Se o botão existir, configuramos ele
    if(botao) {
        botao.onclick = function() {
            window.open(linkFinal, '_blank');
        };
        botao.style.opacity = "1";
        botao.style.pointerEvents = "auto";
        alert("Simulação pronta! O botão de WhatsApp agora está ativado.");
    } else {
        alert("Erro: O botão do WhatsApp não foi encontrado no seu HTML.");
    }
}