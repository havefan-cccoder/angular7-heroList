import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';  /*导入数据格式*/
/*4、不需要假数据了，导入service。import { HEROES } from '../ mock-heroes';*/  /*导入mock数据 */
import { HeroService } from '../hero.service';

import { from } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
  // 1、 hero = 'Windstorm';

  // 2、& 3、 hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  /* 4、heroes = HEROES; */// 不用假数据了，需要调接口，所以需要建一个service，这个service里能调很多接口，其中之一是可以发消息：MessageService接口。
  heroes: Hero[]; /* 从接口里获取数据，所以不需要上面那行的赋值操作了，直接声明这属性就行 */

  // 6、selectedHero: Hero;
  // onSelect(hero: Hero): void {放在这不行?
  //   this.selectedHero = hero;
  // }


  constructor(private heroService: HeroService) { }

  ngOnInit() {/*初始化逻辑*/
    this.getHeroes();
  }

  // 6、onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
    /* 5、this.heroes = this.heroService.getHeroes();现在返回的是Observable<Hero[]>，之前返回的事Hero[],所以改成下面的代码*/ /* 因为这里返回的是假数据，所以能立马返回，是同步的，不是异步的 */
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
        /* 新的版本等待 Observable 发出这个英雄数组，这可能立即发生，也可能会在几分钟之后。 然后，subscribe 函数把这个英雄数组传给这个回调函数，该函数把英雄数组赋值给组件的 heroes 属性。*/
  }
}
