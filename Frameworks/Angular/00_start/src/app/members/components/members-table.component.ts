import { Component } from "@angular/core";

import { createDefaultApiResponse, ApiResponse } from "../../../models/member.model";
import { MembersApiService } from "../../../api/members-api.service";
import { MatSelectChange } from "@angular/material";

@Component({
  selector: "app-members-table",
  templateUrl: "./members-table.component.html",
  styleUrls: ["./members-table.component.css"]
})
export class MembersTableComponent {
  apiResponse: ApiResponse = createDefaultApiResponse();
  orgName = "lemoncode";
  pageLimit = 5;
  pageLimitOption = "pageLimit5";
  offSet = 0;

  constructor(private membersApi: MembersApiService) {}

  loadMembers() {
    this.apiResponse = this.membersApi.getAllMembers(this.orgName, this.pageLimit, this.offSet);
  }

  loadOrganization() {
    this.offSet = 0;
    this.loadMembers();
  }

  resetMembers() {
    this.orgName = "";
    this.offSet = 0;
    this.pageLimit = 5;
    this.apiResponse = createDefaultApiResponse();
  }

  handlePageLimitChange(change: MatSelectChange) {
    const value = change.value as string;
    this.pageLimit = Number(value.replace("pageLimit", ""));
  }

  handlePaging(pageIndex: number) {
    this.offSet = pageIndex;
    this.loadMembers();
  }
}
