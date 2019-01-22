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
  MatToolbarModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
  ]
})
export class SharedModule {
}
