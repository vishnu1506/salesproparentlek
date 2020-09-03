import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-access-tiles',
  templateUrl: './quick-access-tiles.component.html',
  styleUrls: ['./quick-access-tiles.component.scss']
})
export class QuickAccessTilesComponent implements OnInit {

  constructor() { }
  selectedTile: any;

  ngOnInit(): void {
  }

  selectTile(selectedNumber: any): void {
    this.selectedTile = selectedNumber;
  }

}
