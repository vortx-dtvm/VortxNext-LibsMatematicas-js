import { Big } from 'as-big'

const doisCincoDois: Big = Big.of(252)
const cem :Big = Big.of(100)

export function calculoPuPos(mediaCDI: f64, porcentagem: f64, dp: i32, DiAcomuladoAnterior: f64, vne: f64) :f64 {

    const DI : Big = calculoFatorDi(mediaCDI)
    const spread : Big = calculoFatorSpread(porcentagem, dp)
    const acomuladoDIA : Big  = Big.of(DiAcomuladoAnterior).times(DI)
    const fJuros : Big  = acomuladoDIA.times(spread)
    const pu : Big = Big.of(vne).times(fJuros)
    return pu.toF64()
}

export function calculoPuPre(vne : f64, porcentagem : f64, dp: f64):f64  {    
    const div1por252: i32 = <i32>Big.of(dp).div(doisCincoDois).plus(Big.ONE).toNumber()
    const fatorJuros : Big = Big.of(porcentagem).pow(div1por252)
    const pu :Big = Big.of(vne).times(fatorJuros)
    return pu.toF64()
}

function calculoFatorDi(mediaCDI: f64):Big {            
    const div1por252: i32 = <i32>Big.ONE.div(doisCincoDois).toNumber()
    const mediaCdiPorCem: Big = Big.of(mediaCDI).div(cem).plus(Big.ONE)
    const fatorDi : Big = mediaCdiPorCem.pow(div1por252)
    return fatorDi
}

function calculoFatorSpread(porcentagem: f64, dp: f64):Big {    
    const dpPorDoisCincoDois :i32 = <i32>Big.of(dp).div(doisCincoDois).toNumber()
    const porcentagemMais1 : Big = Big.ONE.plus(porcentagem)
    const spread :Big = porcentagemMais1.pow(dpPorDoisCincoDois)

    return spread

}