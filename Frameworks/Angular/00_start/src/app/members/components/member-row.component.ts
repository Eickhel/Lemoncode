import { Component, Input, EventEmitter, Output } from "@angular/core";
import { ApiResponse } from "../../../models/member.model";

@Component({
  selector: "app-member-row",
  templateUrl: "./member-row.component.html",
  styleUrls: ["./member-row.component.css"]
})
export class MemberRowComponent {
  @Input() apiResponse: ApiResponse;
  @Input() pageLimit: number;
  @Output() handlePagingEmitter = new EventEmitter<number>();
  page: number = 1;

  openURL(url: string) {
    window.open(url);
  }

  handlePaging(event: number) {
    this.page = event;
    this.handlePagingEmitter.emit(event);
  }
}
