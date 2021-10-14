import { Big } from 'as-big'

const doisCincoDois: Big = Big.of(252)
const cem :Big = Big.of(100)

class puPosResult {
    spreadEsperado: number
    diEsperado: number
    diAcumuladoEsperado: number
    fatorJurosEsperado: number
    puEsperado: number
}

export function calculoPuPos(mediaCDI: f64, porcentagem: f64, dp: i32, DiAcomuladoAnterior: f64, vne: f64) :puPosResult {

    const DI : Big = calculoFatorDi(mediaCDI)
    const spread : Big = calculoFatorSpread(porcentagem, dp)
    const acomuladoDIA : Big  = Big.of(DiAcomuladoAnterior).times(DI)
    const fJuros : Big  = acomuladoDIA.times(spread)
    const pu : Big = Big.of(vne).times(fJuros)
    
    return {
        spreadEsperado: spread.toNumber(),
        diEsperado:  DI.toNumber(),
        diAcumuladoEsperado: acomuladoDIA.toNumber(),
        fatorJurosEsperado: fJuros.toNumber(),
        puEsperado: pu.toNumber()
    }
}

function calculoFatorDi(mediaCDI: f64):Big {            
    const div1por252: f64 = 1 / 252
    const mediaCdiPorCem: Big = Big.of(mediaCDI).div(cem).plus(Big.ONE)
    const fatorDi : Big = Big.of(Math.pow(mediaCdiPorCem.toNumber(), div1por252))
    
    return fatorDi
}

function calculoFatorSpread(porcentagem: f64, dp: f64):Big {    
    const dpPorDoisCincoDois :f64 = dp / 252
    const porcentagemMais1 : Big = Big.ONE.plus(porcentagem)
    const spread :Big = Big.of(Math.pow(porcentagemMais1.toNumber(), dpPorDoisCincoDois))

    return spread
}



export function calculoPuPre(vne : f64, porcentagem : f64, dp: f64):f64  {    
    const div1por252: f64 = (dp /252) + 1
    const fatorJuros : Big = Big.of(Math.pow(porcentagem, div1por252))
    const pu :Big = Big.of(vne).times(fatorJuros)

    return pu.toF64()
}
