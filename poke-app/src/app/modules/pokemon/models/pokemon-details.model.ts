import { Abilities } from './abilities.model';
import { Form } from './form.model';
import { GameIndice } from './game-indice.model';
import { HeldItem } from './held-item.model';
import { Move } from './move.model';
import { Sprites } from './sprites.model';
import { Stat } from './stat.model';
import { Type } from './type.model';
import { Version } from './version.model';

export interface PokemonDetails {
  abilities: Abilities[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndice[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Version;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}
