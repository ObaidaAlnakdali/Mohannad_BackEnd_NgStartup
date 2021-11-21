import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Personal,
Params_Get_Personal_By_Where

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-personal',
templateUrl: './personal.component.html',
styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit , OnDestroy  {
Get_Personal_By_Where_Subscription = new Subscription();
searchModel: Params_Get_Personal_By_Where = new Params_Get_Personal_By_Where();
data: Personal[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {
this.searchModel.START_ROW = 0;


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Personal_By_Where_Subscription.unsubscribe();

}
ClearAndFetch() {
this.data = [];
this.searchModel.START_ROW  = 0;
this.fetchData();
}
fetchData() {
this.searchModel.END_ROW = this.searchModel.START_ROW + 10;
this.Get_Personal_By_Where_Subscription = this.proxy.Get_Personal_By_Where(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.PERSONAL_ID === -1).length > 0) {
return;
}
}
const record = new Personal();
record.PERSONAL_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Personal(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.PERSONAL_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_PERSONAL]&REL_FIELD=PERSONAL_IMAGE&REL_KEY=' + newEntry.PERSONAL_ID;
this.data.unshift(newEntry);
}
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
