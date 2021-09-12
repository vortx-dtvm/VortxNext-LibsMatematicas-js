const { floorFigure } = require("../Util")
function calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne) {

    const spread = calculoFatorSpread(porcentagem, dp)
    const di = calculoFatorDi(mediaCdi)
    const diAcumulado = fatorDiAcumuladoAnterior * di
    const juros = diAcumulado * spread
    const pu = vne * juros

    const spreadToFixed = calculoFatorSpread(porcentagem, dp).toFixed(14)
    const diToFixed = calculoFatorDi(mediaCdi).toFixed(14)
    const diAcumuladoToFixed = (fatorDiAcumuladoAnterior * diToFixed).toFixed(14)
    const jurosToFixed = (diAcumuladoToFixed * spreadToFixed).toFixed(14)
    const puToFixed = (vne * jurosToFixed).toFixed(10)

    const spreadFloorFigure = floorFigure(calculoFatorSpread(porcentagem, dp), 14)
    const diFloorFigure = floorFigure(calculoFatorDi(mediaCdi), 14)
    const diAcumuladoFloor = floorFigure((fatorDiAcumuladoAnterior * diFloorFigure), 14)
    const jurosFloor = floorFigure((diAcumuladoFloor * spreadFloorFigure), 14)
    const puFloorFigure = floorFigure((vne * jurosFloor), 10)

    return {
        toFixed: {
            spread: Number(spreadToFixed),
            di: Number(diToFixed),
            diAcumulado: Number(diAcumuladoToFixed),
            fatorJuros: Number(jurosToFixed),
            pu: Number(puToFixed)
        },
        floorFigure: {
            spread: Number(spreadFloorFigure),
            di: Number(diFloorFigure),
            diAcumulado: Number(diAcumuladoFloor),
            fatorJuros: Number(jurosFloor),
            pu: Number(puFloorFigure),
        },
        nativo: {
            spread: spread,
            di: di,
            diAcumulado: diAcumulado,
            fatorJuros: juros,
            pu: pu,
        }
    }
}

function calculoFatorDi(mediaCdi) {
    const umPorDoisCincoDois = (1 / 252)
    const mediaCdiPorCem = ((mediaCdi / 100) + 1)
    const pu = Math.pow(mediaCdiPorCem, umPorDoisCincoDois)

    return pu
}

function calculoFatorSpread(porcentagem, dp) {
    const dpPorDoisCincoDois = (dp / 252)
    const porcentagemMaisUm = (1 + porcentagem)
    const pu = Math.pow(porcentagemMaisUm, dpPorDoisCincoDois)

    return pu
}
function calculoPuPre(vne, porcentagem, dp) {
    const dpPorDoisCincoDois = (dp / 252)
    const porcentagemMaisUm = (1 + porcentagem)
    const juros = Math.pow(porcentagemMaisUm, dpPorDoisCincoDois)
    const pu = vne * juros


    const jurosToFixed = (Math.pow(dpPorDoisCincoDois, porcentagemMaisUm)).toFixed(9)
    const puToFixed = (vne * juros).toFixed(14)

    const jurosFloorFigure = floorFigure(Math.pow(porcentagemMaisUm, dpPorDoisCincoDois), 9)
    const puFloorFigure = floorFigure((vne * juros), 14)

    return {
        toFixed: {
            fatorJuros: Number(jurosToFixed),
            pu: Number(puToFixed)
        },
        floorFigure: {
            fatorJuros: Number(jurosFloorFigure),
            pu: Number(puFloorFigure),
        },
        nativo: {
            fatorJuros: juros,
            pu: pu,
        }
    }
}

module.exports = { calculoPuPos, calculoFatorDi, calculoFatorSpread, calculoPuPre }