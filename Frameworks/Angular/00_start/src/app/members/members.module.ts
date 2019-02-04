import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MemberRowComponent, MembersTableComponent } from "./components";
import {
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatSelectModule
} from "@angular/material";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  declarations: [MemberRowComponent, MembersTableComponent],
  exports: [MembersTableComponent]
})
export class MembersModule {}
