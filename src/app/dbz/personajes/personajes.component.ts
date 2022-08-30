import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
 
})
export class PersonajesComponent{
//  @Input() personajes: Personaje[]= [];
//  <app-personajes [personajes]="personajes"> el segundo personajes viene de aquí, y lo que hacemos es asociar este personajes con el del main page.

get personajes():Personaje[]{
  return this.dbzService.personajes;
}

constructor (private dbzService: DbzService){}

  
}
