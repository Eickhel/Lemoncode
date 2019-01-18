import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MemberRowComponent, MembersTableComponent } from "./members-table";
import { MatToolbarModule, MatInputModule, MatButtonModule, MatListModule, MatCardModule } from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  declarations: [MemberRowComponent, MembersTableComponent],
  exports: [MembersTableComponent]
})
export class MembersModule {}
