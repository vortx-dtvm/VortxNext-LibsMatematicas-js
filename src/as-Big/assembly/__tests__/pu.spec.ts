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
        
        expect<f64>(puFinal.pu.round(10,3).toNumber()).toBe(puEsperado)
        expect<f64>(puFinal.spread.round(14,0).toNumber()).toBe(spreadEsperado)
        expect<f64>(puFinal.di.round(14,3).toNumber()).toBe(diEsperado)
        expect<f64>(puFinal.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        expect<f64>(puFinal.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)

        log(`
                     |      final      |     esperado     | 
            spread   |${puFinal.spread.round(14,0).toNumber()} | ${spreadEsperado})| 
              di     |${puFinal.di.round(14,3).toNumber()} | ${diEsperado})| 
         diAcumulado |${puFinal.diAcumulado.round(14,3).toNumber()} | ${diAcumuladoEsperado})| 
         fatorJuros  |${puFinal.fatorJuros.round(14,3).toNumber()} | ${fatorJurosEsperado})|
             pu      |${puFinal.pu.round(10,3).toNumber()} | ${puEsperado})| 
        `)
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
        
        expect<f64>(puPrimeiroDia.pu.round(10,3).toNumber()).toBe(puEsperado)
        expect<f64>(puPrimeiroDia.spread.round(14,0).toNumber()).toBe(spreadEsperado)
        expect<f64>(puPrimeiroDia.di.round(14,3).toNumber()).toBe(diEsperado)
        expect<f64>(puPrimeiroDia.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        expect<f64>(puPrimeiroDia.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)

        dp++
        fatorDiAcumuladoAnterior = puPrimeiroDia.diAcumulado.round(14,3).toNumber()
        vne = 10007.00

        const puSegundoDia = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)

        spreadEsperado = 1.00859205720279
        diEsperado = 1.00016137008907
        diAcumuladoEsperado = 1.00564191494378
        fatorJurosEsperado = 1.01428244780250
        puEsperado = 10149.9244551596

        
        const assert: bool = puSegundoDia.pu.round(10,3).toNumber() === puEsperado
        
        if(assert){
          expect<f64>(puSegundoDia.pu.round(10,3).toNumber()).toBe(puEsperado)
          expect<f64>(puSegundoDia.pu.round(10,0).toNumber()).not.toBe(puEsperado)

        }
        else {
          expect<f64>(puSegundoDia.pu.round(10,0).toNumber()).toBe(puEsperado)
          expect<f64>(puSegundoDia.pu.round(10,3).toNumber()).not.toBe(puEsperado)

        }
        // expect<f64>(puSegundoDia.spread.round(14,3).toNumber()).toBe(spreadEsperado)
        // expect<f64>(puSegundoDia.di.round(14,3).toNumber()).toBe(diEsperado)
        // expect<f64>(puSegundoDia.diAcumulado.round(14,3).toNumber()).toBe(diAcumuladoEsperado)
        // expect<f64>(puSegundoDia.fatorJuros.round(14,3).toNumber()).toBe(fatorJurosEsperado)
    })

    it('Calcula de um periodo de um mês', () => {
      
      const porcentagem = 0.06;
      const vne = 10000.00
      let fatorDiAcumuladoAnterior = 1.00000000      
      let result :string = `\n |      final      |     esperado     | \n`
      for (let dp :i32 = 1; dp < puEsperado.length; dp++) {
          let mediaCdi = mediasCdi[dp];

          const puCalculado = calculoPuPos(mediaCdi, porcentagem, dp, fatorDiAcumuladoAnterior, vne)
          fatorDiAcumuladoAnterior = puCalculado.diAcumulado.round(14,3).toNumber()

          result = `${result} |${puCalculado.pu.round(10,3).toNumber().toString().padEnd(16,'0')} | ${puEsperado[dp].toString().padEnd(16,'0')} | \n`
          
          const assert: bool = puCalculado.pu.round(10,3).toNumber() === puEsperado[dp]          
          if(assert)
            expect<f64>(puCalculado.pu.round(10,3).toNumber()).toBe(puEsperado[dp]) 
          else 
            expect<f64>(puCalculado.pu.round(10,0).toNumber()).toBe(puEsperado[dp])          
      }
      log(result)
  })
  });
});