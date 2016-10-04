import {
  EventEmitter, 
  OnChanges, 
  Output,
  OnInit,
  Component, 
  ViewChild, 
  ElementRef, 
  Renderer,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-elevator',
  templateUrl: './elevator.component.html',
  styleUrls: ['./elevator.component.css'],
  animations: [
    trigger('moveState', [
      state('moveUp', style({
        transform: 'translateY(' + String(-60) + 'px)'
      })),
      state('moveDown', style({
        transform: 'translateY(' + String(60) + 'px)'
      })),
      state('static', style({
        transform: 'translateY(0)'
      })),
      transition('* => moveUp', animate('500ms ease-in')),
      transition('* => moveDown', animate('500ms ease-out')),
      transition('* => static', animate('0ms linear'))
    ])
  ]
})

export class ElevatorComponent implements OnInit, OnChanges {
  
  public state = 'static';
  public deltaMoving: number = 60;
  
  @ViewChild('thisElement') thisBox: ElementRef;
  @Input() value: number;
  @Output() finishTransform = new EventEmitter();

  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.value != null) {
      if (changes.value.currentValue < changes.value.previousValue) {
        this.value = changes.value.currentValue;
        this.moveUp();
      }
      else if (changes.value.currentValue > changes.value.previousValue) {
        this.value = changes.value.currentValue;
        this.moveDown();
      }
    }
  }

  public finish() {
    this.finishTransform.emit(this.value);
  }

  public moveUp() {
    this.state = 'moveUp';
    setTimeout(() => {
      this.renderer.setElementStyle(
        this.thisBox.nativeElement, 
        'transform', 
        'translateY(' + String(this.value * this.deltaMoving) + 'px)'
      );
      this.state = 'static';
      this.finish();
    }, 500);
  }

  public moveDown() {
    this.state = 'moveDown';
    setTimeout(() => {
      this.renderer.setElementStyle(
        this.thisBox.nativeElement, 
        'transform', 
        'translateY(' + String(this.value * this.deltaMoving) + 'px)'
      );
      this.state = 'static';
      this.finish();
    }, 500);
  }

}
