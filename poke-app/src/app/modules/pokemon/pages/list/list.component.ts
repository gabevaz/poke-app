import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

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
  detailsSubs: Subscription;
  inputSearchValue: any = '';
  isLoading: boolean = true;
  limit: number = 9;
  listOfItems: any[] = [];
  listSubs: Subscription;
  offset: number = 0;
  totalItens: number = 0;

  constructor(
    private readonly pokemonService: PokemonService,
    private readonly toastr: ToastrService
  ) {}

  cleanInputSearch() {
    this.inputSearchValue = '';
    this.resetItems();
    this.getAllPokemons();
  }

  async generateItems(items: ResultList[]): Promise<void> {
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

    this.isLoading = false;
  }

  getAllPokemons(): void {
    const offset = (this.currentPage - 1) * this.limit;
    this.isLoading = true;

    this.listSubs = this.pokemonService
      .getAllPokemons(this.limit, offset)
      .subscribe(
        (result) => {
          this.generateItems(result.results);
          this.totalItens = result.count;
        },
        () => {
          this.toastr.error(
            'Não foi possível obter a lista de Pokémons',
            'Atenção!'
          );
          this.resetItems();
          this.totalItens = 0;
        }
      )
      .add(() => (this.isLoading = false));
  }

  ngOnDestroy(): void {
    this.listSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllPokemons();
    this.setEventToInput();
  }

  pageChanged(page: number): void {
    this.resetItems();
    this.currentPage = page;
    this.getAllPokemons();
  }

  resetItems(): void {
    this.listOfItems = [];
  }

  searchByName(name: string): void {
    if (!name || name.length === 0) {
      this.resetItems();
      this.getAllPokemons();
      return;
    }

    this.isLoading = true;
    this.resetItems();

    setTimeout(() => {
      this.pokemonService
        .getPokemonByParam(name)
        .subscribe(
          (result) => {
            this.listOfItems.push(result);
          },
          () => {
            this.resetItems();
          }
        )
        .add(() => (this.isLoading = false));
    }, 1000);
  }

  setEventToInput(): void {
    fromEvent(this.fieldSearch.nativeElement, 'keyup')
      .pipe(
        map((event: any) => {
          return event.target.value;
        }),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((text: string) => {
        this.searchByName(text);
      });
  }
}
