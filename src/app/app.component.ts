import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    searchRows = '';
    detilsArray = [];
    rows = [
        {
            date: new Date(),
            list_name: 'Name 1',
            no_of_enties: 0,
            details: []
        },
        {
            date: new Date(),
            list_name: 'Name 2',
            no_of_enties: 1,
            details: [{
                id: 1,
                description: ' I am here.'
            }]
        },
        {
            date: new Date(),
            list_name: 'Name 3',
            no_of_enties: 4,
            details: [{
                id: 1,
                description: ' I am here.'
            }, {
                id: 2,
                description: ' I am here 2.'
            }, {
                id: 3,
                description: ' I am here 3.'
            }, {
                id: 4,
                description: ' I am here 4.'
            }]
        }
    ];

    view(arr) {
        this.detilsArray = arr;
    }
}
