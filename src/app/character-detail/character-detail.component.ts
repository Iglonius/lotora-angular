import { Component, OnInit, Input,  } from '@angular/core'
import { CharacterDetails } from '../character';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})

export class CharacterDetailComponent {
    @Input() character: CharacterDetails;

    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private characterService: CharacterService
    ) {}

    ngOnInit() {
        this.route.paramMap.subscribe(
            () => this.getCharacterData()
        );
    }

    getCharacterData(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.characterService.getCharacter(id).subscribe(character =>
            this.character = character
        );
    }
}