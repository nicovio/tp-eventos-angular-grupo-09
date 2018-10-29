import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatSelectModule  } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatSelectModule ],
    exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatMenuModule, MatIconModule, MatListModule, MatSidenavModule, MatSelectModule]
})


export class MaterialModule { }