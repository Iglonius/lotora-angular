import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service'


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  characters: Character[];

  constructor(private charService: CharacterService) {}

  ngOnInit() {
    this.charService.getCharacters().subscribe(characters => this.characters = characters);
  }

}
