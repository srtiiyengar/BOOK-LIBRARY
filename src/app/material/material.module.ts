import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatStepperModule,
  MatFormFieldModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
