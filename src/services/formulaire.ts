import {Injectable} from '@angular/core';
import {SetterFn} from '@angular/core/src/reflection/types';

@Injectable()
export class Formulaire {
  private _type: string;
  private _chartreGraphique: string;
  private _hebergeur: string;
  private _evolution: string;
  private _nombrePage: string;
  private _siteSimilaire: string;
  private _referencement: string;
  private _budget: string;
  private _cms: string;
  private _commerce: string;
  private _compte: string;
  private _fonctionnaliteParticuliere: string;
  private _interfaceAdministrateur: string;
  private _mail: string;
  private _telephone: string;
  private _nom: string;
  private _prenom: string;
  private _entreprise: string;
  private _responsive: string;


  constructor(responsive: string, type: string, chartreGraphique: string, hebergeur: string, evolution: string, nombrePage: string, siteSimilaire: string, referencement: string, budget: string, cms: string, commerce: string, compte: string, fonctionnaliteParticuliere: string, interfaceAdministrateur: string, mail: string, telephone: string, nom: string, prenom: string, entreprise: string) {
    this._type = type;
    this._chartreGraphique = chartreGraphique;
    this._hebergeur = hebergeur;
    this._evolution = evolution;
    this._nombrePage = nombrePage;
    this._siteSimilaire = siteSimilaire;
    this._referencement = referencement;
    this._budget = budget;
    this._cms = cms;
    this._commerce = commerce;
    this._compte = compte;
    this._fonctionnaliteParticuliere = fonctionnaliteParticuliere;
    this._interfaceAdministrateur = interfaceAdministrateur;
    this._mail = mail;
    this._telephone = telephone;
    this._nom = nom;
    this._prenom = prenom;
    this._entreprise = entreprise;
    this._responsive = responsive;
  }
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  get chartreGraphique(): string {
    return this._chartreGraphique;
  }

  set chartreGraphique(value: string) {
    this._chartreGraphique = value;
  }

  get hebergeur(): string {
    return this._hebergeur;
  }

  set hebergeur(value: string) {
    this._hebergeur = value;
  }

  get evolution(): string {
    return this._evolution;
  }

  set evolution(value: string) {
    this._evolution = value;
  }

  get nombrePage(): string {
    return this._nombrePage;
  }

  set nombrePage(value: string) {
    this._nombrePage = value;
  }

  get siteSimilaire(): string {
    return this._siteSimilaire;
  }

  set siteSimilaire(value: string) {
    this._siteSimilaire = value;
  }

  get referencement(): string {
    return this._referencement;
  }

  set referencement(value: string) {
    this._referencement = value;
  }

  get budget(): string {
    return this._budget;
  }

  set budget(value: string) {
    this._budget = value;
  }

  get cms(): string {
    return this._cms;
  }

  set cms(value: string) {
    this._cms = value;
  }

  get commerce(): string {
    return this._commerce;
  }

  set commerce(value: string) {
    this._commerce = value;
  }

  get compte(): string {
    return this._compte;
  }

  set compte(value: string) {
    this._compte = value;
  }

  get fonctionnaliteParticuliere(): string {
    return this._fonctionnaliteParticuliere;
  }

  set fonctionnaliteParticuliere(value: string) {
    this._fonctionnaliteParticuliere = value;
  }

  get interfaceAdministrateur(): string {
    return this._interfaceAdministrateur;
  }

  set interfaceAdministrateur(value: string) {
    this._interfaceAdministrateur = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get entreprise(): string {
    return this._entreprise;
  }

  set entreprise(value: string) {
    this._entreprise = value;
  }
  get responsive(): string {
    return this._responsive;
  }
  set responsive(value: string) {
    this._responsive = value;
  }
}
