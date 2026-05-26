function simularPlanos() {
    const select = document.getElementById("tipoVeiculo");
    const tipo = select.value;
    const nomeVeiculo = select.options[select.selectedIndex].text;
    const areaPlanos = document.getElementById("areaPlanos");
    
    const tabela = {
        leves: { "48 Meses": "R$ 62,90", "36 Meses": "R$ 69,90", "24 Meses": "R$ 75,90", "12 Meses": "R$ 79,00" },
        utilitarios: { "48 Meses": "R$ 110,90", "36 Meses": "R$ 116,90", "24 Meses": "R$ 122,90", "12 Meses": "R$ 129,90" },
        vans: { "48 Meses": "R$ 154,90", "36 Meses": "R$ 162,90", "24 Meses": "R$ 170,90", "12 Meses": "R$ 179,90" }
    };

    let html = `<div style="max-width: 500px; margin: 0 auto; padding: 20px;"><h3>Tabela: ${nomeVeiculo}</h3>`;
    for(let plano in tabela[tipo]) {
        html += `<div style="background:white; margin:10px 0; padding:15px; border-radius:8px; border:1px solid #ddd; display:flex; justify-content:space-between;">
                 <span><strong>${plano}</strong></span><span style="color:#25D366; font-weight:bold;">${tabela[tipo][plano]}/mês</span></div>`;
    }
    html += `</div>`;
    areaPlanos.innerHTML = html;

    // Configuração do WhatsApp
    const seuNumeroWhatsApp = "81983587253"; // <--- EDITE AQUI!
    const msg = `Olá! Vi a promoção no site. Tenho um ${nomeVeiculo} e quero o Plano Essencial.`;
    const link = `https://wa.me/${seuNumeroWhatsApp}?text=${encodeURIComponent(msg)}`;
    
    const btn = document.getElementById("linkWhatsapp");
    btn.setAttribute("onclick", `window.open('${link}', '_blank')`);
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
}