import { Injectable } from '@angular/core';
import {Formulaire} from './formulaire';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable()
export class DemandeService {

  constructor() {
    this.getBooks();
  }

  formulaire: Formulaire[] = [];
  formulaireSubject = new Subject<Formulaire[]>();

  emitBooks() {
    this.formulaireSubject.next(this.formulaire);
  }

  saveBooks() {
    firebase.database().ref('/demandes').set(this.formulaire);
  }

  getBooks() {
    firebase.database().ref('/demandes')
      .on('value', (data: DataSnapshot) => {
          this.formulaire = data.val() ? data.val() : [];
          this.emitBooks();
        }
      );
  }

  getSingleBook(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewBook(newDemande: Formulaire) {
    this.formulaire.push(newDemande);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(formulaire: Formulaire) {
    const bookIndexToRemove = this.formulaire.findIndex(
      (formulaireEl) => {
        if (formulaireEl === formulaire) {
          return true;
        }
      }
    );
    this.formulaire.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
}
