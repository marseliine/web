import { Component, Input } from '@angular/core';
import { TableDataService } from '../../profile/services/table-data.service';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.scss']
})
export class AddPersonComponent {
modalVisible: any;
  @Input()
  tableData: any[] = [];
positionOptions: any;
phoneOptions: any;
saveData() {
throw new Error('Method not implemented.');
}
handleOk(): void {
  console.log('Button ok clicked!');
  this.modalVisible = false;
}

handleCancel(): void {
  console.log('Button cancel clicked!');
  this.modalVisible = false;
}
}