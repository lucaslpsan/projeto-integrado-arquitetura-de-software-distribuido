import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TermspageComponent } from './components/termspage/termspage.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterVehiclePageComponent } from './components/register-vehicle-page/register-vehicle-page.component';
import { AddNewTechnicalSheetComponent } from './components/add-new-technical-sheet/add-new-technical-sheet.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'sobre', component: AboutpageComponent },
  { path: 'termos-de-uso', component: TermspageComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'perfil', component: ProfileComponent },
  {
    path: 'cadatrar-novo-veiculo',
    component: RegisterVehiclePageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'adicionar-nova-ficha-tecnica',
    component: AddNewTechnicalSheetComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
