import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatIconModule,
    DragDropModule
  ]
})
export class AppMaterialModule { }
