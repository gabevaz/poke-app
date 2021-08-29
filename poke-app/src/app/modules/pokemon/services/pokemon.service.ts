import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ListResponse } from '../models/list-response.model';
import { PokemonDetails } from '../models/pokemon-details.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  getAllPokemons(limit: number, offset: number): Observable<ListResponse> {
    const url = `${environment.apiUrl}/pokemon/?limit=${limit}&offset=${offset}`;
    return this.http.get<ListResponse>(url);
  }

  getPokemonByParam(param: string): Observable<PokemonDetails> {
    const url = `${environment.apiUrl}/pokemon/${param}`;
    return this.http.get<PokemonDetails>(url);
  }
}
