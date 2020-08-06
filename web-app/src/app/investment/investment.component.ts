import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../_services/rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements AfterViewInit {

  constructor(
    private route: ActivatedRoute,
    private rest: RestService,
    public location: Location,
  ) { }

  editingFlag = false;
  isLoadingSave = false;
  isLoadingResults = true;
  investment: InvestmentPreview;

  ngAfterViewInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.isLoadingResults = true;
    this.rest.getOneInvestment(id).subscribe(data => {
      this.investment = data;
      this.isLoadingResults = false;
    });
  }

  edit(){
    this.editingFlag = true;
  }

  save(){
    this.isLoadingSave = true;
    this.rest.updateOneInvestment(this.investment).subscribe()
    this.editingFlag = false;
  }
}

export interface InvestmentPreview {
  id: string;
  lycee: string;
  ville: string;
  titreoperation: string;
  etat_d_avancement: string;
  entreprise: string;
  annee_de_livraison: string;
  mandataire: string;
  ppi: string;
  notification_du_marche: string;
  codeuai: string;
  latitude: string;
  longitude: string;
  montant_des_ap_votes_en_meu: string;
  cao_attribution: string;
  maitrise_d_oeuvre: string;
  mode_de_devolution: string;
  annee_d_individualisation: string;
  enveloppe_prev_en_meu: string;
}
