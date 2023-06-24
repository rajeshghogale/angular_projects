import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../material-module';

import { CardsComponent } from './cards/cards.component';

@NgModule({
 imports:      [ CommonModule, DemoMaterialModule ],
 declarations: [ CardsComponent ],
 exports:      [ CommonModule, FormsModule, DemoMaterialModule, CardsComponent ]
})
export class SharedModule { }