import { CommonModule, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { AppRoutingModule } from '../app-routing.module';
import { AuthInterceptor } from '../http-interceptors/auth-interceptor';
import { AuthService } from '../shared/services/auth.service';
import { HomeService } from '../shared/services/home.service';
import { AddNewTechnicalSheetComponent } from './add-new-technical-sheet/add-new-technical-sheet.component';
import { CardMyVehiclesComponent } from './dashboard/card-my-vehicles/card-my-vehicles.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterVehiclePageComponent } from './register-vehicle-page/register-vehicle-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { DashboardService } from '../shared/services/dashboard.service';
import { TimestampFirestorePipe } from '../pipes/timestamp-firestore-pipe';
import { LOCALE_ID } from '@angular/core';

import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    HeaderComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    RegisterVehiclePageComponent,
    AddNewTechnicalSheetComponent,
    CardMyVehiclesComponent,
    CardMyVehiclesComponent,
    TimestampFirestorePipe,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressBarModule,
    MatExpansionModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatGridListModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    HomeService,
    provideNgxMask(),
    DashboardService,
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  exports: [HeaderComponent, SignInComponent],
})
export class ComponentsModule {}
