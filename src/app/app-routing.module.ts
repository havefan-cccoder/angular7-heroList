import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component'; /* 导入需要展示的路由组件 */
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent}, /* 配置路由信息 */
  { path: 'dashboard', component: DashboardComponent}, /* 配置路由信息 */
  { path: 'detail/:id', component: HeroDetailComponent} /* 配置路由信息,path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], /* 初始化路由器 */
  exports: [RouterModule]
})
export class AppRoutingModule { }
