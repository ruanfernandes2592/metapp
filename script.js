const form = document.querySelector('.form');

const metaMes = form.querySelector('.metaMes');
const valorTotalVendas = form.querySelector('.valorTotalVendas');
const diasMes = form.querySelector('.diasMes');
const diasFunc = form.querySelector('.diasFunc');

const mediaVD = document.querySelector('.mediaVendasDia');
const metaVD = document.querySelector('.metaVendasDia');
const valorRestMeta = document.querySelector('.valorRestMeta');
const porcentagem = document.querySelector('.porcentagem');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    mostraResultados();
})

function calculaMediaVendasDia() {
    let res = valorTotalVendas.value / diasFunc.value;
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaMetaVendasDia() {
    let res = (metaMes.value - valorTotalVendas.value) / (diasMes.value - diasFunc.value);
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaValorRest() {
    let res = metaMes.value - valorTotalVendas.value;
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaPorcentagemAlcançada() {
    let res = (valorTotalVendas.value / metaMes.value) * 100;
    return res.toFixed(1) + '%';
}

function formatarValor() {
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFormatado;
}

function mostraResultados() {
    mediaVD.innerText = calculaMediaVendasDia();
    metaVD.innerText = calculaMetaVendasDia();
    valorRestMeta.innerText = calculaValorRest();
    porcentagem.innerText = calculaPorcentagemAlcançada();
}