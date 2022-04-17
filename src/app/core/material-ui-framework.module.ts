import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatGridListModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatToolbarModule,
        MatSidenavModule,
        MatCardModule,
        MatSelectModule
    ]
})
export class MaterialUiFrameworkModule { }
