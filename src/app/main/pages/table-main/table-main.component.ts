import { Component } from '@angular/core';
import { TableDataService } from '../../profile/services/table-data.service';
import { AddPersonComponent } from '../add-person/add-person.component';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent {
  tableData: any[] = []; // Замените any[] на соответствующий тип вашего массива данных
  selectedRows: any[] = []; // Массив для хранения выбранных строк
  constructor(private tableDataService: TableDataService, private modalService: NzModalService) {}
  ngOnInit() {
    this.tableData = this.tableDataService.tableData();
  }
  

  // Остальные части кода

  // Метод для выбора строки
  selectRow(item: any) {
    item.selected = !item.selected;
    if (item.selected) {
      this.selectedRows.push(item); // Добавление выбранной строки в массив
    } else {
      this.selectedRows = this.selectedRows.filter((row) => row !== item); // Удаление строки из массива, если она была отменена
    }
  }

  // Метод для удаления выбранных строк
  deleteSelectedRows() {
    this.tableData = this.tableData.filter((row) => !this.selectedRows.includes(row));
    // Очистка массива выбранных строк
    this.selectedRows = [];
  }
  hidePassword(password: string): string {
    return '*'.repeat(password.length);
  }

  // Метод для замены последних семи цифр номера телефона на символ 'X'
  hidePhoneNumber(phone: string): string {
    if (phone.length >= 7) {
      const digitsToReplace = phone.slice(-7); // Получение последних семи цифр номера телефона
      const maskedDigits = 'X'.repeat(digitsToReplace.length); // Замена цифр на символы 'X'
      return phone.slice(0, -9) + maskedDigits; // Конкатенация префикса номера и замаскированных цифр
    } else {
      return phone; // Если номер телефона содержит менее семи цифр, оставляем его как есть
    }
  }
  openModal() {
    const modalRef = this.modalService.create({
      nzContent: AddPersonComponent,
      nzComponentParams: {
        tableData: this.tableData
      },  
      nzFooter: null
    });
  }

}
