import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { NavigatorService } from 'src/app/navigator.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  modalConfirm: NzModalRef | undefined;
  
constructor(
  private readonly modal: NzModalService,
  private readonly message: NzMessageService,
  private readonly navigator: NavigatorService) {}

onTryDelete(): void {
  this.modalConfirm = this.modal.confirm({
     nzTitle: 'Карточка будет безвозвратно удалена!',
     nzContent: 'Подтвердите удаление',
     nzOkText: 'Да',
     nzOkDanger: true,
     nzOnOk: () => this.onDelete(),
     nzCancelText: 'Отмена',
  });
}

onSave(): void {
  this.message.create('success', 'Персонаж добавлен к вам в коллекцию');
}

onOpen(): void {
  this.navigator.goViewCharacterCard();
}

onDelete(): void {}
}
