import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { TermspageComponent } from './components/termspage/termspage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: AboutpageComponent },
  { path: 'termos-de-uso', component: TermspageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
