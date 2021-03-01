import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Experience_item,
Params_Get_Experience_item_By_Where,
Params_Delete_Experience_item,
Experience,
Params_Get_Experience_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-experience_item',
templateUrl: './experience_item.component.html',
styleUrls: ['./experience_item.component.css']
})
export class Experience_itemComponent implements OnInit , OnDestroy  {
Get_Experience_item_By_Where_Subscription = new Subscription();
searchModel: Params_Get_Experience_item_By_Where = new Params_Get_Experience_item_By_Where();
data: Experience_item[] = [];

ExperienceList: Experience[];
_params_Get_Experience_By_OWNER_ID = new Params_Get_Experience_By_OWNER_ID();
Get_Experience_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {
this.searchModel.START_ROW = 0;

this._params_Get_Experience_By_OWNER_ID.OWNER_ID = 1;
this.Get_Experience_By_OWNER_ID_Subscription = this.proxy.Get_Experience_By_OWNER_ID(this._params_Get_Experience_By_OWNER_ID).subscribe(result => this.ExperienceList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Experience_item_By_Where_Subscription.unsubscribe();
this.Get_Experience_By_OWNER_ID_Subscription.unsubscribe();

}
ClearAndFetch() {
this.data = [];
this.searchModel.START_ROW  = 0;
this.fetchData();
}
fetchData() {
this.searchModel.END_ROW = this.searchModel.START_ROW + 10;
this.Get_Experience_item_By_Where_Subscription = this.proxy.Get_Experience_item_By_Where(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.EXPERIENCE_ITEM_ID === -1).length > 0) {
return;
}
}
const record = new Experience_item();
record.EXPERIENCE_ITEM_ID = -1;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Experience_item(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.EXPERIENCE_ITEM_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_EXPERIENCE_ITEM]&REL_FIELD=EXPERIENCE_ITEM_IMAGE&REL_KEY=' + newEntry.EXPERIENCE_ITEM_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Experience_item = new Params_Delete_Experience_item();
_params_Delete_Experience_item.EXPERIENCE_ITEM_ID = entry.EXPERIENCE_ITEM_ID;
this.proxy.Delete_Experience_item(_params_Delete_Experience_item).subscribe(data => {
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
