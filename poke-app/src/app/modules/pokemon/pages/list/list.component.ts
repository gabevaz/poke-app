import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

import { ListResponse } from '../../models/list-response.model';
import { PokemonDetails } from '../../models/pokemon-details.model';
import { ResultList } from '../../models/result-list.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnDestroy, OnInit {
  @ViewChild('fieldSearch', { static: true }) fieldSearch: ElementRef;

  currentPage: number = 1;
  getAllPokemonsSubs: Subscription;
  getByPokemonNameSubs: Subscription;
  isLoading: boolean = true;
  limit: number = 9;
  listOfItems: PokemonDetails[] = [];
  offset: number = 0;
  totalItens: number = 0;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly toastr: ToastrService
  ) {}

  private async generateItems(items: ResultList[]): Promise<void> {
    if (!items || items.length === 0) {
      this.resetItems();
      return;
    }

    this.resetItems();
    this.isLoading = true;

    for (const pokemon of items) {
      const response = await this.pokemonService
        .getPokemonByParam(pokemon.name)
        .toPromise();

      this.listOfItems.push(response);
    }

    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  private getAllPokemons(): void {
    const offset = (this.currentPage - 1) * this.limit;
    this.isLoading = true;

    this.getAllPokemonsSubs = this.pokemonService
      .getAllPokemons(this.limit, offset)
      .subscribe(
        (result: ListResponse) => {
          this.generateItems(result.results);
          this.totalItens = result.count;
        },
        () => {
          this.toastr.error(
            'Não foi possível obter a lista de Pokémons',
            'Atenção!'
          );
          this.resetItems();
          this.isLoading = false;
        }
      );
  }

  private resetItems(): void {
    this.listOfItems = [];
    this.totalItens = 0;
  }

  getByPokemonName(name: string): void {
    if (!name || name.length === 0) {
      this.resetItems();
      this.getAllPokemons();
      return;
    }

    this.isLoading = true;
    this.resetItems();

    this.getByPokemonNameSubs = this.pokemonService
      .getPokemonByParam(name)
      .subscribe(
        (result: PokemonDetails) => {
          this.listOfItems.push(result);
          this.totalItens = 1;
        },
        () => {
          this.resetItems();
        }
      )
      .add(() => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.getAllPokemonsSubs ? this.getAllPokemonsSubs.unsubscribe() : null;
    this.getByPokemonNameSubs ? this.getByPokemonNameSubs.unsubscribe() : null;
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  pageChanged(page: number): void {
    this.resetItems();
    this.currentPage = page;
    this.getAllPokemons();
  }
}
