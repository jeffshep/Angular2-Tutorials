import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2> {{hero.name}} details!</h2>
      <div><label>ID: </label>{{hero.id}}</div>
      <div>
        <label>NAME: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
    styles:[`
        label {
        color: #ff3300;
        font-style: Verdana;}
        h2 {
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
        background-color: #009933;
        color: #ffffff;
        font-weight: bold;
        font-style: Verdana;
        }
      `],
    inputs: ['hero']
})
export class HeroDetailComponent {
    public hero: Hero;
}

