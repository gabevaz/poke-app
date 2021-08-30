import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { PokemonDetails } from '../../models/pokemon-details.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnDestroy, OnInit {
  details: PokemonDetails;
  getByPokemonIdSubs: Subscription;
  idPokemon: string | null;
  isLoading: boolean = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly pokemonService: PokemonService,
    private readonly toastr: ToastrService
  ) {
    this.idPokemon = this.activatedRoute.snapshot.paramMap.get('id');
  }

  emitMessageError(): void {
    this.toastr.error('Não foi possível obter os dados do Pokémon', 'Atenção!');
  }

  getByPokemonId(): void {
    if (!this.idPokemon || this.idPokemon.length === 0) {
      this.emitMessageError();
      return;
    }

    this.isLoading = true;

    this.getByPokemonIdSubs = this.pokemonService
      .getPokemonByParam(this.idPokemon)
      .subscribe(
        (result: PokemonDetails) => {
          this.details = result;
        },
        () => {
          this.emitMessageError();
        }
      )
      .add(() => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.getByPokemonIdSubs ? this.getByPokemonIdSubs.unsubscribe() : null;
  }

  ngOnInit(): void {
    this.getByPokemonId();
  }
}
