import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PokemonProvider } from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pokemon;

  nextId : number;

  constructor(public navCtrl: NavController, public pokemonProvider: PokemonProvider) {
    this.nextId = 1;

  }

  getPokemon(){
    this.pokemonProvider.getPokemon(this.nextId)
    .subscribe(
      (res) => {
        this.nextId++;
        this.pokemon = res;
        console.log(this.pokemon);
      }
    )
  }

}
