import { Component } from "@angular/core";

import { MemberEntity } from "../models/member.model";
import { MembersApiService } from "../members-api.service";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styleUrls: ["./members-table.component.css"]
})
export class MembersTableComponent {
  members: MemberEntity[];
  orgName = "lemoncode";

  constructor(private membersApi: MembersApiService) {}

  loadMembers() {
    this.membersApi.getAllMembers(this.orgName).subscribe(ms => (this.members = ms));
  }

  resetMembers() {
    this.orgName = "";
    this.members = [];
  }
}
