const form = document.querySelector('.form');

$(document).ready(function() {
    $('.metaMes').mask("0.000.000,00", {reverse: true});
    $('.valorTotalVendas').mask("0.000.000,00", {reverse: true});
})

let metaMes = form.querySelector('.metaMes');
let valorTotalVendas = form.querySelector('.valorTotalVendas');

const diasMes = form.querySelector('.diasMes');
const diasFunc = form.querySelector('.diasFunc');

const mediaVD = document.querySelector('.mediaVendasDia');
const metaVD = document.querySelector('.metaVendasDia');
const valorRestMeta = document.querySelector('.valorRestMeta');
const porcentagem = document.querySelector('.porcentagem');
const barra = document.querySelector('.barra-interna');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    mostraResultados();
});

function removeFormatMetaMes() {
    let metamesStr = metaMes.value.replace(/[^0-9]/g, '');
    const metaMesNum = parseInt(metamesStr);

    return metaMesNum / 100; // Valor dividido por 100 para eliminar 2 casas decimais
}

function removeFormatMetValorTotalVendas() {
    let valorTotalVendasStr = valorTotalVendas.value.replace(/[^0-9]/g, '');
    const valorTotalVendasNum = parseInt(valorTotalVendasStr);

    return valorTotalVendasNum / 100; // Valor dividido por 100 para eliminar 2 casas decimais
}

function calculaMediaVendasDia() {
    let res = removeFormatMetValorTotalVendas() / diasFunc.value;
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaMetaVendasDia() {
    let res = (removeFormatMetaMes() - removeFormatMetValorTotalVendas()) / (diasMes.value - diasFunc.value);
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaValorRest() {
    let res = removeFormatMetaMes() - removeFormatMetValorTotalVendas();
    const valorFormatado = res.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return valorFormatado;
}

function calculaPorcentagemAlcançada() {
    let res = (removeFormatMetValorTotalVendas() / removeFormatMetaMes()) * 100;
    return res.toFixed(1) + '%';
}

function barraPercent() {
    let res = (removeFormatMetValorTotalVendas() / removeFormatMetaMes()) * 100;
    return res.toFixed(1);
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
    barra.style.width = `${barraPercent()}%`;
}