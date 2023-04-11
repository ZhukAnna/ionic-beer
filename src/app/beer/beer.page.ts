import {Component, EnvironmentInjector, Inject, inject, ViewChild} from '@angular/core';
import {IonicModule, IonModal} from '@ionic/angular';
import {BeerService} from "../beer.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-beer',
  templateUrl: 'beer.page.html',
  styleUrls: ['beer.page.scss'],
  standalone: true,
  imports: [IonicModule, NgForOf, NgIf, RouterLink],
})
export class BeerPage {
  @ViewChild(IonModal) modal!: IonModal;

  public environmentInjector = inject(EnvironmentInjector);

  constructor(@Inject(BeerService) readonly beerService: BeerService) {}

  close() {
    this.modal.dismiss(null, 'cancel').then();
  }
}
