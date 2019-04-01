
 export class Character {
     id: number;
     name: string;
     realm: string;
 }

 export class CharacterDetails {
     name: string;
     race: string;
     class: string;
     level: number;
     achievementPoints: number;
     guild: string;
     thumbnail: string;
     head: ItemDetails;
     neck: ItemDetails;
     shoulder: ItemDetails;
     back: ItemDetails;
     chest: ItemDetails;
     shirt: ItemDetails;
     wrist: ItemDetails;
     hands: ItemDetails;
     waist: ItemDetails;
     legs: ItemDetails;
     feet: ItemDetails;
     finger1: ItemDetails;
     finger2: ItemDetails;
     trinket1: ItemDetails;
     trinket2: ItemDetails;
     mainHand: ItemDetails;
     offHand: ItemDetails;
 }

 export class ItemDetails {
     name: string;
     icon: string;
     itemLevel: number;
 }