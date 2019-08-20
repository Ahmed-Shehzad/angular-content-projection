import { NgModule } from '@angular/core';

import {
    MatButtonModule, MatNativeDateModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule,
    MatIconModule, MatSidenavModule, MatListModule, MatRadioModule, MatDatepickerModule,
    MatTabsModule, MatMenuModule, MatGridListModule, MatProgressSpinnerModule,
    MatToolbarModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule
  } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatNativeDateModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule,
    MatIconModule, MatSidenavModule, MatListModule, MatRadioModule, MatDatepickerModule,
    MatTabsModule, MatMenuModule, MatGridListModule, MatProgressSpinnerModule,
    MatToolbarModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule
  ],
  exports: [
    MatButtonModule, MatNativeDateModule, MatAutocompleteModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule,
    MatIconModule, MatSidenavModule, MatListModule, MatRadioModule, MatDatepickerModule,
    MatTabsModule, MatMenuModule, MatGridListModule, MatProgressSpinnerModule,
    MatToolbarModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule
  ]
})
export class MaterialModule {}