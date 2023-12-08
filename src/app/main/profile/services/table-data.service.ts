import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  tableData(): any[] {
    return [
      { id: 1, date: '01.11.2020',name: 'Петров Петр Петрович', profession: 'Внешний эксперт', email: 'petrt@mail.ru', passward: 'AvTg5H!n', telephone: '+7 928 500 80 90'},
      { id: 2, date: '01.11.2020',name: 'Сергеев Сергей Сергеевич', profession: 'HR BP', email: 'serii@mail.ru', passward: 'AvTg5H!n', telephone: '+7 928 500 80 90' },
      { id: 3, date: '01.11.2020',name: 'Сергеев Сергей Сергеевич', profession: 'HR BP', email: 'serii@mail.ru', passward: 'AvTg5H!n', telephone: '+7 928 500 80 90' },
    ];
  }
}