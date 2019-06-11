import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrls: ['./page-article.component.css']
})
export class PageArticleComponent implements OnInit, OnDestroy {

  first_paragraph = `
  Bem, no meu caso em particular, eu integrei meu
  repositório do GitHub ao Travis CI para a Integração
  Continua do meu projeto, também integrei o mesmo
  repositório ao Code Climate para monitorar a qualidade
  do código. Os testes foram desenvolvidos utilizando a
  estratégia TDD com auxílio das ferramentas Mocha & Chai
  para Node.js e para mensurar a qualidade destes testes
  foi utilizado o Instanbul coverage.
  `;
  second_paragraph = `
  Então, o objetivo era rodar a suite de testes no Travis CI
  e enviar os resultados dos testes ao Code Climate que exibiria
  a porcentagem de cobertura de testes. Ué!? Simples demais.
  Para mim como iniciante no CI e no Test Coverage não foi um tarefa fácil,
  porém não impossivel.
  `;

  articleData: any = {
    author: 'Thiago Luiz Nunes ',
    title: 'Rasterization Algorithms — Computer Graphics',
    date: '20 Juno',
    time_reading: '3 min',
    claps: 150,
    elements: [
      { type: 'PARAGRAPH', data: this.first_paragraph },
      { type: 'PARAGRAPH', data: this.second_paragraph },
      { type: 'FIGURE', data: '/assets/imgs/name3.jpg' },
      { type: 'PARAGRAPH', data: 'I am a computer science developer' },
    ]
  };

  scrollActivated: boolean;

  constructor(private route: ActivatedRoute) {
    this.scrollActivated = false;
   }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);

    this.route.params.subscribe(res => {
      console.log('Page response from url: ', res);
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  scrollEvent = (event: any): void => {
    const number = event.pageY;
    if (number > 75) {
      this.scrollActivated = true;
    } else {
      this.scrollActivated = false;
    }
  }
}
