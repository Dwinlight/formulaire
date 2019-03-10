import { Component, OnInit } from '@angular/core';
import {Formulaire} from '../../services/formulaire';
import {ActivatedRoute, Router} from '@angular/router';
import {DemandeService} from '../../services/demandeService';

@Component({
  selector: 'app-single-demande',
  templateUrl: './single-demande.component.html',
  styleUrls: ['./single-demande.component.css']
})
export class SingleDemandeComponent implements OnInit {

  book: Formulaire;

  constructor(private route: ActivatedRoute, private booksService: DemandeService,
              private router: Router) {}

  ngOnInit() {
    this.book = new Formulaire(null,
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
    const id = this.route.snapshot.params['id'];
    this.booksService.getSingleBook(+id).then(
      (book: Formulaire) => {
        this.book = book;
      }
    );
  }

  onBack() {
    this.router.navigate(['/books']);
  }

}
