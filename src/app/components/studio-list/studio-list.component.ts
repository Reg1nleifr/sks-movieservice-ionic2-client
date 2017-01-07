import { Component, OnInit } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { Studio } from '../../../models/studios';
import { StudioService } from '../../../providers/studio-service';

@Component({
    selector: 'studio-list',
    templateUrl: './studio-list.component.html'
})
export class StudioListComponent implements OnInit {
    private isLoading: boolean;
    private title: String;
    private studios: Studio[] = [];

    ngOnInit(): void {
        this.isLoading = true
        this.title = "Studios";
        this.getStudios();
    }

    getStudios(): void {
        this.studioService.getStudios()
            .then(studios => { this.studios = studios; this.isLoading = false });
    }

    openDetails(studio: Studio): void {
        let alert = this.alertController.create({
            title: 'Details',
            subTitle: `Id: ${studio.id}<br/>Studio Name: ${studio.name}<br/>Country Code: ${studio.countrycode}<br/>Post Code: ${studio.postcode}`,
            buttons: ['OK']
        });
        alert.present();
        
        //alert(`Id: ${studio.id}\nStudio Name: ${studio.name}\nCountry Code: ${studio.countrycode}\nPost Code: ${studio.postcode}`);
    }

    constructor(private studioService: StudioService, private alertController: AlertController) {
    }
}
