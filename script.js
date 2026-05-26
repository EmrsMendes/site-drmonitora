// Base de Dados com os preços exatos da sua Tabela do Plano Essencial
const bancoDePlanos = {
    leves: [
        { meses: "48 Meses", preco: "R$ 62,90", destaque: "Maior Economia" },
        { meses: "36 Meses", preco: "R$ 69,90", destaque: "Mais Popular" },
        { meses: "24 Meses", preco: "R$ 75,90", destaque: "Equilíbrio" },
        { meses: "12 Meses", preco: "R$ 79,00", destaque: "Curto Prazo" }
    ],
    utilitarios: [
        { meses: "48 Meses", preco: "R$ 110,90", destaque: "Maior Economia" },
        { meses: "36 Meses", preco: "R$ 116,90", destaque: "Mais Popular" },
        { meses: "24 Meses", preco: "R$ 122,90", destaque: "Equilíbrio" },
        { meses: "12 Meses", preco: "R$ 129,90", destaque: "Curto Prazo" }
    ],
    vans: [
        { meses: "48 Meses", preco: "R$ 154,90", destaque: "Maior Economia" },
        { meses: "36 Meses", preco: "R$ 162,90", destaque: "Mais Popular" },
        { meses: "24 Meses", preco: "R$ 170,90", destaque: "Equilíbrio" },
        { meses: "12 Meses", preco: "R$ 179,90", destaque: "Curto Prazo" }
    ]
};

function simularPlanos() {
    const selectVeiculo = document.getElementById("tipoVeiculo");
    const tipoSelecionado = selectVeiculo.value;
    const nomeVeiculo = selectVeiculo.options[selectVeiculo.selectedIndex].text;
    const areaDeExibicao = document.getElementById("areaPlanos");
    
    const planos = bancoDePlanos[tipoSelecionado];

    let htmlDosPlanos = `<div style="max-width: 500px; margin: 0 auto;">`;
    htmlDosPlanos += `<h3 style="color: #003b70;">Tabela Plano Essencial para ${nomeVeiculo}</h3>`;
    htmlDosPlanos += `<p style="color: #555; margin-bottom: 20px;">*Todos os planos incluem Assistência 24h, App Exclusivo e Recuperação com adesão de R$ 1,00.</p>`;
    
    planos.forEach(plano => {
        // Se for o plano de 48 ou 36 meses, destacamos visualmente
        let corBorda = plano.destaque === "Maior Economia" ? "#ffcc00" : "#0056b3";
        let corFundo = plano.destaque === "Maior Economia" ? "#fffdf5" : "#f8f9fa";

        htmlDosPlanos += `
            <div style="border: 2px solid ${corBorda}; margin: 10px 0; padding: 15px; border-radius: 8px; text-align: left; background-color: ${corFundo}; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h4 style="margin: 0; color: #003b70; font-size: 18px;">Plano de ${plano.meses}</h4>
                    <span style="font-size: 12px; color: #666; background: #e9ecef; padding: 2px 6px; border-radius: 4px;">${plano.destaque}</span>
                </div>
                <div style="text-align: right;">
                    <strong style="font-size: 22px; color: #25D366;">${plano.preco}</strong><span style="font-size: 14px; color: #555;">/mês</span>
                </div>
            </div>
        `;
    });
    
    htmlDosPlanos += `</div>`;
    areaDeExibicao.innerHTML = htmlDosPlanos;

    // --- CONFIGURAÇÃO DO WHATSAPP ---
    // COLOQUE SEU NÚMERO ABAIXO (Apenas números, com DDI 55 e o DDD)
    const seuNumeroWhatsApp = "81983587253"; 
    
    const mensagemPronta = `Olá! Vi a promoção de entrada por R$ 1,00 no seu site. Tenho um(a) ${nomeVeiculo} e gostaria de fechar o meu Plano DR Essencial. Pode me ajudar?`;
    
    const botaoZap = document.querySelector(".btn-whatsapp");
    botaoZap.href = `https://wa.me/${seuNumeroWhatsApp}?text=${encodeURIComponent(mensagemPronta)}`;
}