import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(
    private http: HttpClient,
    ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  baseurl = 'http://localhost:3000/';

  getAllInvestments(sortedBy, sortDirection): Observable<InvestmentsAPI>{

    return this.http.get<InvestmentsAPI>(this.baseurl + "investments/" + sortedBy + "/" + sortDirection);

  }

  getOneInvestment(id): Observable<InvestmentPreview>{

    return this.http.get<InvestmentPreview>(this.baseurl + "investment/" + id);

  }

  updateOneInvestment(investment) {

    const body = JSON.stringify(investment);
    const id = investment['id'];

    return this.http.post(this.baseurl + 'investment/' + id, body, this.httpOptions);

  }

}

export interface InvestmentsAPI {
  investments: InvestmentPreview[];
  total_count: number;
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
