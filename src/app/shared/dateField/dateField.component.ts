import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'DateField',
    templateUrl: './dateField.component.html'
})

export class DateFieldComponent implements OnInit {
    @Input() questionDatas
    @Output("formChange") change: EventEmitter<any> = new EventEmitter();
    date=''

    constructor(public datePipe:DatePipe) { }

    ngOnInit() { 
    }

    onChange(event){
        this.date=event.target.value
        
        this.change.emit(this.datePipe.transform(this.date,'MM/dd/YYYY'));
    }
}