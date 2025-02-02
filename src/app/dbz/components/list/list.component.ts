import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false

})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 10 }
  ]


  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje

    if (!id) { return };

    this.onDelete.emit(id);
    // console.log(id)
  }
}


