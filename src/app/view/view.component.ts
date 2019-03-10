import { Component, OnInit } from '@angular/core';
import {Formulaire} from '../../services/formulaire';
import * as firebase from '../app.component';
import {NgForm} from '@angular/forms';
import {DemandeService} from '../../services/demandeService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  private estVitrine: boolean;
  private etape: number;
  private formulaire: Formulaire;
  constructor(private booksService: DemandeService, private router: Router) {
    this.etape = 1;
    this.formulaire = new Formulaire(null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null, null, null, null, null);

  }
  onNewBook() {
    this.booksService.createNewBook(this.formulaire);
    this.formulaire = null;
  }

  increment(nextStep: number) {
    if (this.etape < nextStep) {
      this.etape++;
    }
  }
  precedent() {
    this.etape--;
  }
  onSubmitStep5(form: NgForm) {
    this.etape++;
    this.formulaire.siteSimilaire = form.value;
    console.log(form.value);
  }
  onSubmitStep7(form: NgForm) {
    this.etape++;
    this.formulaire.budget = form.value;
    console.log(form.value);
  }
  onSubmitStep8(form: NgForm) {
    this.etape++;
    this.formulaire.cms = form.value;
    console.log(form.value);
  }
  onSubmitStep12(form: NgForm) {
    this.etape++;
    this.formulaire.fonctionnaliteParticuliere = form.value;
    console.log(form.value);
  }
  step1(choix: string) {
    this.increment(2);
    this.formulaire.type = choix;
    this.estVitrine = choix === 'vitrine';
  }
  step2(choix: string) {
    this.increment(3);
    this.formulaire.chartreGraphique = choix;
  }
  step3(choix: string) {
    this.increment(4);
    this.formulaire.hebergeur = choix;
  }
  step4(choix: string) {
    this.increment(5);
    this.formulaire.evolution = choix;
  }
  step5(choix: string) {
    this.increment(6);
    this.formulaire.nombrePage = choix;
  }
  step6(choix: string) {
    this.increment(7);
    this.formulaire.siteSimilaire = choix;
  }
  step7(choix: string) {
    this.increment(8);
    this.formulaire.referencement = choix;
  }
  step8(choix: string) {
    this.increment(9);
    this.formulaire.cms = choix;

  }
  step9(choix: string) {
    this.increment(10);
    this.formulaire.responsive = choix;
    if (this.estVitrine) {
      this.etape = 14;
    }
  }

  step10(choix: string) {
    this.increment(11);
    this.formulaire.commerce = choix;
  }
  step11(choix: string) {
    this.increment(12);
    this.formulaire.compte = choix;
  }
  step12(choix: string) {
    this.increment(13);
    this.formulaire.fonctionnaliteParticuliere = choix;
  }
  step13(choix: string) {
    this.increment(14);
    this.formulaire.interfaceAdministrateur = choix;
  }
  step14(choix: string) {
    this.increment(15);
    this.formulaire.budget = choix;
  }
  validationFormulaire(form: NgForm) {
    this.increment(16);
    this.formulaire.prenom = form.value.prenom;
    this.formulaire.nom = form.value.nom;
    this.formulaire.mail = form.value.mail;
    this.formulaire.telephone = form.value.telephone;
    this.formulaire.entreprise = form.value.entreprise;
    this.onNewBook();

  }

}
