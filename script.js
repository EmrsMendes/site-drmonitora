const bancoDePlanos = {
    carro: [
        { nome: "Plano Básico", preco: "R$ 69,90/mês", descricao: "Monitoramento 24h via App" },
        { nome: "Plano Intermediário", preco: "R$ 99,90/mês", descricao: "Monitoramento + Rastreador Físico" },
        { nome: "Plano Premium", preco: "R$ 149,90/mês", descricao: "Proteção Total + Assistência Guincho" }
    ],
    moto: [
        { nome: "Plano Básico", preco: "R$ 49,90/mês", descricao: "Monitoramento 24h via App" },
        { nome: "Plano Intermediário", preco: "R$ 79,90/mês", descricao: "Monitoramento + Alarme Antifurto" },
        { nome: "Plano Premium", preco: "R$ 119,90/mês", descricao: "Bloqueador Remoto + Assistência" }
    ]
};

function simularPlanos() {
    const tipoSelecionado = document.getElementById("tipoVeiculo").value;
    const areaDeExibicao = document.getElementById("areaPlanos");
    const planos = bancoDePlanos[tipoSelecionado];

    let htmlDosPlanos = `<h3>Melhores opções para ${tipoSelecionado.toUpperCase()}</h3>`;
    
    planos.forEach(plano => {
        htmlDosPlanos += `
            <div style="border: 2px solid #0056b3; margin: 15px auto; padding: 15px; border-radius: 8px; text-align: left; background-color: #f8f9fa; max-width: 400px;">
                <h4 style="margin: 0 0 5px 0; color: #003b70;">${plano.nome}</h4>
                <p style="margin: 0 0 10px 0; font-size: 14px; color: #555;">${plano.descricao}</p>
                <strong style="font-size: 18px; color: #25D366;">${plano.preco}</strong>
            </div>
        `;
    });

    areaDeExibicao.innerHTML = htmlDosPlanos;
}