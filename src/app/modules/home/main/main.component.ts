import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  article: { type: string, data: string }[] = [
    {
      type: 'PARAGRAPH',
      data: `
      Bem, no meu caso em particular, eu
      integrei meu repositório do GitHub ao Travis
      CI para a Integração Continua do meu projeto,
      também integrei o mesmo repositório ao Code Climate
      para monitorar a qualidade do código. Os testes foram
      desenvolvidos utilizando a estratégia TDD com auxílio
      das ferramentas Mocha & Chai para Node.js e para
      mensurar a qualidade destes testes foi utilizado o Instanbul coverage.'
      `
    },
    {
      type: 'FIGURE',
      data: 'It is a figure data to be used for everyone!'
    },
    {
      type: 'PARAGRAPH',
      data: `
      Então, o objetivo era rodar a suite de testes no Travis CI
      e enviar os resultados dos testes ao Code Climate que exibiria
      a porcentagem de cobertura de testes. Ué!? Simples demais.
      Para mim como iniciante
      no CI e no Test Coverage não foi um tarefa fácil, porém não impossivel.
      `
    },
    {
      type: 'FIGURE',
      data: 'It is a figure data to be used for everyone!'
    },
  ];

  mostRatedArticles: Object = [
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ];
  constructor() { }

  ngOnInit() {
  }

}
