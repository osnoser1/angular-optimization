import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'angular-test';
  list: { value: number }[];

  constructor(public ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.list = this.getRandomList();
  }

  onResetList() {
    this.list = this.getRandomList();
  }

  private getRandomList() {
    return Array.from({ length: 200 }, () => ({
      value: Math.floor(Math.random() * 20) + 1,
    }));
  }
}
