import {Phrase} from "./phrase";
import {Component} from "@angular/core";

const PHRASES: Phrase[] = [
    {value: "Hello World", language: "English"},
    {value: "Привет Мир", language: "Russian"},
    {value: "Привiт Свiт", language: "Ukrainian"},
    {value: "Hola Mundo", language: "Spanish"},
    {value: "Bonjour le monde", language: "French"},
    {value: "Hallo Welt", language: "German"},
    {value: "Ciao mondo", language: "Italian"},
    {value: "Witaj swiecie", language: "Polish"},
    {value: "Pozdravijen svet", language: "Slovenian"},
    {value: "Прывiтанне Сусвет", language: "Belarusian"},
];

@Component({
    selector: 'hello-world-list',
    templateUrl: 'app/hello-world-list/hello-world-list.component.html',
    styleUrls: ['app/hello-world-list/hello-world-list.component.css']
})

export class HelloWorldListComponent {
    phraseList: Phrase[] = PHRASES;
    selectedPhraseLanguage: string;

    //Обработчик события
    onSelect(selected: Phrase) {
        this.selectedPhraseLanguage = selected.language;
    }
}