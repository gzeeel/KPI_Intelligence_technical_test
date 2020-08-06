import { Component, AfterViewInit } from '@angular/core';
import { RestService } from '../_services/rest.service';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements AfterViewInit {

  constructor(
    private rest: RestService,
  ) { }

  investments: Investments;
  isLoadingResults: boolean = true;

  public pieChartLabels = [];
  public pieChartData = [];
  public pieChartType = 'pie';

  public lineChartData = [
    { data: [], label: 'Nombre de livraisons' }
  ];
  public lineChartLabels = [];
  public lineChartType = 'line';

  ngAfterViewInit() {
    this.rest.getAllInvestments("none", "asc").subscribe(data => {
      this.investments = data;
      this.countData().then((statesCount) => {
        this.buildGraph(statesCount).then((success) => {
          this.isLoadingResults = false;
        });
      });
    });
  }

  countData(){
    return new Promise((resolve, reject) => {
      let counts = {
        states: {},
        deliveries : {}
      }

      let invest = this.investments.investments;

      invest.forEach((i) => {

        // Count states
        if(counts.states[i['etat_d_avancement']]){
          counts.states[i['etat_d_avancement']] += 1;
        } else {
          counts.states[i['etat_d_avancement']] = 1;
        }
        // Count deliveries
        if(typeof i['annee_de_livraison'] != "undefined") {
          if(counts.deliveries[i['annee_de_livraison']]){
            counts.deliveries[i['annee_de_livraison']] += 1;
          } else {
            counts.deliveries[i['annee_de_livraison']] = 1;
          }
        }
      });
      resolve(counts);
    });
  }

  buildGraph(counts){
    return new Promise((resolve, reject) => {

      const states = Object.keys(counts.states);
      const deliveryYears = Object.keys(counts.deliveries);

      states.forEach((state) => {
        this.pieChartLabels.push(state);
        this.pieChartData.push(counts.states[state]);
      })

      deliveryYears.forEach((deliveryYear) => {
        this.lineChartLabels.push(deliveryYear);
        this.lineChartData[0]['data'].push(counts.deliveries[deliveryYear]);
      })

      resolve();
    });
  }

}

export interface Investments {
  investments: Investment[];
  total_count: number;
}

export interface Investment {
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
