
function calculaGaussiana(x, mi, sigma){
    const e = 2.71828182845;
    return y = (1/((Math.sqrt(2*Math.PI))*sigma))* Math.pow(e, ((-0.5* Math.pow(((x-mi)/(sigma)),2))));
}

function calculaSnellDescartes(n1,n2,ang1){
    return (Math.asin((n1 * (Math.sin(ang1*Math.PI/180)))/n2))*180/Math.PI
}

function calculaLog(base, x){
    const logX = Math.log(x);
    const logBase = Math.log(base);
    return a/base;
}

function calculaBhaskara(coef1, coef2, coef3){
    const delta = Math.pow(coef2,2) - (4*coef1*coef3);
    const raiz1 = (-coef2-Math.sqrt(delta))/(2*coef1);
    const raiz2 = (-coef2+Math.sqrt(delta))/(2*coef1);
    return raiz1, raiz2
}

function calculoJurosSimples(capital, taxa, n_periodos){
    return capital*taxa*n_periodos
}

//6. calculo juros compostos
//7. calculo amortização
//8. calculo desvio padrão
// quebrar em mais linhas
// implementa as libs
