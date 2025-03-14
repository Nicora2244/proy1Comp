import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1PageRoutingModule } from './page1-routing.module';

import { Page1Page } from './page1.page';
import { ElementsModule } from '../elements/elements.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1PageRoutingModule,
    
    //Aqui importo el modulo que quiero utilizar
    ElementsModule
  ],
  declarations: [Page1Page]
})
export class Page1PageModule {}
