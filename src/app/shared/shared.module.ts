import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatListModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from '../http-interceptors';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    MatListModule,
    NgxEchartsModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatListModule,
    NgxEchartsModule,
  ],
  providers: [httpInterceptorProviders],
})
export class SharedModule {}
