import { Big } from 'as-big'

import { puEsperado, mediasCdi } from './MassaDeTestePosFixado'
import { calculoPuPos, puPosResult } from '../Pu'


describe('Big JS', (): void => {
  describe('Deve realizar o calculo de pu pós-fixado', (): void => {

    test('Calcula o PU de dia corretamente', (): void => {
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.00531743243777
        let vne = 10006.00

        const puFinal : puPosResult = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        const spreadEsperado :f64 = 1.00835887163168
        const diEsperado :f64 = 1.00016137008907
        const diAcumuladoEsperado :f64 = 1.00547966060139
        const fatorJurosEsperado :f64 = 1.01388433601262
        const puEsperado :f64 = 10144.9266661423
        
        expect<f64>(puFinal.pu.round(10,3).toNumber()).not.toBe(puEsperado)
        expect<f64>(puFinal.spread.round(14,3).toNumber()).toBe(spreadEsperado)
        expect<f64>(puFinal.di.round(14,3).toNumber()).toBe(diEsperado)
        expect<f64>(puFinal.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        expect<f64>(puFinal.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)
    })

    test('Calcula o PU ultilizando fator acumulado de um dia anterior', () : void => {
        let mediaCdi = 4.15;
        let dp = 36;
        let porcentagem = 0.06;
        let fatorDiAcumuladoAnterior = 1.00531743243777
        let vne = 10006.00

        const puPrimeiroDia: puPosResult = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        let spreadEsperado :f64 = 1.00835887163168
        let diEsperado :f64 = 1.00016137008907
        let diAcumuladoEsperado :f64 = 1.00547966060139
        let fatorJurosEsperado :f64 = 1.01388433601262
        let puEsperado :f64 = 10144.9266661423

        expect<f64>(puPrimeiroDia.spread.round(10,3).toNumber()).toBe(spreadEsperado)
        expect<f64>(puPrimeiroDia.di.round(14,3).toNumber()).toBe(diEsperado)
        expect<f64>(puPrimeiroDia.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        expect<f64>(puPrimeiroDia.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)
        expect<f64>(puPrimeiroDia.pu.round(14,3).toNumber()).toBe(puEsperado)

        dp++
        fatorDiAcumuladoAnterior = puPrimeiroDia.diAcumulado.toNumber()
        vne = 10007.00

        const puSegundoDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        spreadEsperado = 1.00859205720279
        diEsperado = 1.00016137008907
        diAcumuladoEsperado = 1.00564191494378
        fatorJurosEsperado = 1.01428244780250
        puEsperado = 10149.9244551596

        expect<f64>(puSegundoDia.spread.round(10,3).toNumber()).toBe(spreadEsperado)
        expect<f64>(puSegundoDia.di.round(14,3).toNumber()).toBe(diEsperado)
        expect<f64>(puSegundoDia.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        expect<f64>(puSegundoDia.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)
        expect<f64>(puSegundoDia.pu.round(14,3).toNumber()).toBe(puEsperado)
    })

    it('Calcula de um periodo de um mês', () => {
      
      const porcentagem = 0.06;
      const vne = 10000.00
      let fatorDiAcumuladoAnterior = 1.00000000
      const resultados = []

      for (let dp :i32 = 1; dp < puEsperado.length; dp++) {
          let mediaCdi = mediasCdi[dp];

          const puCalculado = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)
          resultados.push({puEsperado:puEsperado[dp], final: puCalculado.pu.round(10,3).toNumber()})

          
          expect(puCalculado.pu.round(10,3).toNumber()).toBe(puEsperado[dp])
          
          fatorDiAcumuladoAnterior = puCalculado.diAcumulado.toNumber()
      }
  })
  });
});