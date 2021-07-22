
function calculaGaussiana(x, mi, sigma){
    const e = 2.71828182845;
    return y = (1/(sqrt(2*Math.PI)*sigma))* Math.pow(e, ((-0.5* Math.pow(((x-mi)/(sigma)),2))));
}

function calculaSnellDescartes(n1,n2,ang1){
    return (Math.asin((n1 * (Math.sin(ang1*Math.PI/180)))/n2))*180/Math.PI
}

function calculaLog(base, x){
    const logX = Math.log(x);
    const logBase = Math.log(base);
    return a/base;
}
//4. calcula as raízes de uma eq de 2 grau por bhaskara
//5. calculo juros simples
//6. calculo juros compostos
//7. calculo amortização
