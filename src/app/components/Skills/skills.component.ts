import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material";
import {
  Proxy,
  Skills,
  Params_Get_Skills_By_Where,
  Params_Delete_Skills,
} from "../../core/services/proxy.service";
import { DeleteConfirmationComponent } from "../delete-confirmation/delete-confirmation.component";
import { CommonService } from "../../core/services/common.service";
@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit, OnDestroy {
  Get_Skills_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Skills_By_Where = new Params_Get_Skills_By_Where();
  data: Skills[] = [];

  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;

    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Skills_By_Where_Subscription.unsubscribe();
  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW + 10;
    this.Get_Skills_By_Where_Subscription = this.proxy
      .Get_Skills_By_Where(this.searchModel)
      .subscribe((result) => {
        if (result != null) {
          result.forEach((element: any) => {
            this.data.push(element);
          });
        }
      });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter((e) => e.SKILLS_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Skills();
    record.SKILLS_ID = -1;
    record.ACTIVE = false;
    this.data.unshift(record);
  }
  Edit(current) {
    this.proxy.Edit_Skills(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage("Done");
        if (current.SKILLS_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL =
            this.CmSvc.APIUrl +
            "/Upload_Image?REL_ENTITY=[TBL_SKILLS]&REL_FIELD=SKILLS_IMAGE&REL_KEY=" +
            newEntry.SKILLS_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        const _params_Delete_Skills = new Params_Delete_Skills();
        _params_Delete_Skills.SKILLS_ID = entry.SKILLS_ID;
        this.proxy.Delete_Skills(_params_Delete_Skills).subscribe((data) => {
          if (data === "") {
            this.data.splice(this.data.indexOf(entry), 1);
          }
        });
      }
    });
  }
  onScroll() {
    this.searchModel.START_ROW = this.searchModel.START_ROW + 10;
    this.fetchData();
  }
  goBack() {
    this.location.back();
  }
}
