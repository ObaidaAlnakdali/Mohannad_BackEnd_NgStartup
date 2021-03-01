import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Experience,
Params_Get_Experience_By_Where,
Params_Delete_Experience,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-experience',
templateUrl: './experience.component.html',
styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit , OnDestroy  {
Get_Experience_By_Where_Subscription = new Subscription();
searchModel: Params_Get_Experience_By_Where = new Params_Get_Experience_By_Where();
data: Experience[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {
this.searchModel.START_ROW = 0;


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Experience_By_Where_Subscription.unsubscribe();

}
ClearAndFetch() {
this.data = [];
this.searchModel.START_ROW  = 0;
this.fetchData();
}
fetchData() {
this.searchModel.END_ROW = this.searchModel.START_ROW + 10;
this.Get_Experience_By_Where_Subscription = this.proxy.Get_Experience_By_Where(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.EXPERIENCE_ID === -1).length > 0) {
return;
}
}
const record = new Experience();
record.EXPERIENCE_ID = -1;
record.ACTIVE = false;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Experience(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.EXPERIENCE_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_EXPERIENCE]&REL_FIELD=EXPERIENCE_IMAGE&REL_KEY=' + newEntry.EXPERIENCE_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Experience = new Params_Delete_Experience();
_params_Delete_Experience.EXPERIENCE_ID = entry.EXPERIENCE_ID;
this.proxy.Delete_Experience(_params_Delete_Experience).subscribe(data => {
if (data === '') {
this.data.splice(this.data.indexOf(entry), 1);
}
});
 }
});
}
onScroll () {
this.searchModel.START_ROW = this.searchModel.START_ROW + 10;
this.fetchData(); }
goBack() {
this.location.back();
}
}
