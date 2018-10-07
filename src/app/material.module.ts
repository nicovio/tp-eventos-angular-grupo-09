import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule  } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule]
})


export class MaterialModule { }