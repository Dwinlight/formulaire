import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../services/authService';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {DemandeService} from '../../services/demandeService';
import {Formulaire} from '../../services/formulaire';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit, OnDestroy {
  books: Formulaire[];
  formulaireSubscription: Subscription;

  isAuth: boolean;

  constructor(private authService: AuthService, private booksService: DemandeService, private router: Router) { }

  ngOnInit() {
    this.formulaireSubscription = this.booksService.formulaireSubject.subscribe(
      (books: []) => {
        this.books = books;
        console.log(books);
      }
    );
    this.booksService.emitBooks();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }
  onNewBook() {
    this.router.navigate(['/books', 'new']);
  }

  onDeleteBook(book: Formulaire) {
    this.booksService.removeBook(book);
  }

  onViewBook(id: number) {
    this.router.navigate(['/books', 'view', id]);
  }

  ngOnDestroy() {
    this.formulaireSubscription.unsubscribe();
  }


}
