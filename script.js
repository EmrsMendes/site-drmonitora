function simularPlanos() {
    const select = document.getElementById("tipoVeiculo");
    const tipo = select.value;
    const nomeVeiculo = select.options[select.selectedIndex].text;
    const areaPlanos = document.getElementById("areaPlanos");
    
    // Tabela de preços
    const tabela = {
        leves: { "12 Meses": "R$ 79,00", "48 Meses": "R$ 62,90" },
        utilitarios: { "12 Meses": "R$ 129,90", "48 Meses": "R$ 110,90" },
        vans: { "12 Meses": "R$ 179,90", "48 Meses": "R$ 154,90" }
    };

    let html = `<div class="card-simulador"><h3>Tabela: ${nomeVeiculo}</h3><ul>`;
    for(let plano in tabela[tipo]) {
        html += `<li><strong>${plano}:</strong> ${tabela[tipo][plano]}/mês</li>`;
    }
    html += `</ul></div>`;
    areaPlanos.innerHTML = html;

    // ABRIR ZAP
    const num = "5511999999999"; // COLOQUE SEU NÚMERO AQUI
    const msg = encodeURIComponent(`Olá! Quero o plano para ${nomeVeiculo}.`);
    window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
}