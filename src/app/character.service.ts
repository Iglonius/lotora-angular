import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { catchError, map, tap, switchMap } from 'rxjs/operators';
import { Character, CharacterDetails } from './character';
import { CHARACTERS } from './mock-characters';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
import { RSA_X931_PADDING } from 'constants';

@Injectable({
  providedIn: 'root'
})

export class CharacterService {

  private char: string;

  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`);
  }

  getCharacters(): Observable<Character[]> {
    this.log("fetched characters");
    return of(CHARACTERS);
  }

  getCharacter(id: number): Observable<CharacterDetails> {

    return of(CHARACTERS.find(character => character.id === id))
      .pipe(switchMap(character => {
        return this.http.get<CharacterDetails>("http://localhost:8080/api/characters/" + character.realm + "/" + character.name)
          .pipe(tap(_ => this.log('Fetched character data')))
      }));
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }
}
