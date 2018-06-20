import { Component, OnInit } from '@angular/core';
import { MineField } from './Minner/MineField';
import { MineFieldInterface } from './Minner/MineFieldInterface';
import { IField } from './Minner/Interface/IField';

@Component({
    selector: 'app',
    providers: [MineFieldInterface],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public Field: MineField;
    public Interface: IField<MineField>;

    constructor(Interface: MineFieldInterface) {
        this.Field = new MineField();
        this.Interface = Interface;

        console.log('constructor');
        console.log(this.Field);
    }

    NewGame() {
        this.Field = new MineField();
    }

    TableClick($event: any) {
        var n = $event.target.id.split('_')[1];
        var m = $event.target.id.split('_')[2];
        this.Interface.Click(this.Field, n, m);
    }

    RightClick($event: any) {
        var n = $event.target.id.split('_')[1];
        var m = $event.target.id.split('_')[2];
        this.Interface.SetFlag(this.Field, n, m);
        return false;
    }

    GetCode(n:number, m:number):number {
        return this.Interface.GetCode( this.Field, n, m);
    }

    MineAround(n: number, m: number): string {
        return this.Interface.MineAround(this.Field, n, m);
    }
}
