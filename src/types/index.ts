export interface PokemonInitialStateType {
  allPokemon: PokemonListResult[];
  count: number;
  isLoading: boolean;
  error: string;
  currentPokemon: undefined | PokemonInstance;
  searchByName: undefined | PokemonInstance;
  isLoadingSearchByName: boolean;
  activeType: undefined | string;
  searchByType: undefined | ListPokemonByType[];
  isLoadingSearchByType: boolean;
}
export interface PokemonListType {
  results: PokemonListResult[];
  count: number;
  next: string | null;
  previous: string | null;
}
export interface PokemonListResult {
  name: string;
  url: string;
}
export interface PokemonInstance {
  id: number;
  name: string;
  types: PokemonTypeInterface[];
  image: string;
  stats: PokemonStatsType[];
  encounters: string[];
  evolutionLevel: number;
  evolution: { level: number; pokemon: { name: string; url: string } }[];
  pokemonAbilities: { abilities: string[]; moves: string[] };
  sprites: PokemonSprites;
  moves: MoveEntry[];
}
export interface PokemonTypeInterface {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStatsType {
  name: string;
  value: string;
}
export interface PokemonSprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    'official-artwork': {
      front_default: string;
      front_shiny: string;
    };
  };
  versions: {
    'generation-i': {
      'red-blue': {
        back_default: null;
        back_gray: null;
        back_transparent: null;
        front_default: null;
        front_gray: null;
        front_transparent: null;
      };
      yellow: {
        back_default: null;
        back_gray: null;
        back_transparent: null;
        front_default: null;
        front_gray: null;
        front_transparent: null;
      };
    };
    'generation-ii': {
      crystal: {
        back_default: string;
        back_shiny: string;
        back_shiny_transparent: string;
        back_transparent: string;
        front_default: string;
        front_shiny: string;
        front_shiny_transparent: string;
        front_transparent: string;
      };
      gold: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
      silver: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        front_transparent: string;
      };
    };
    'generation-iii': {
      emerald: {
        front_default: string;
        front_shiny: string;
      };
      'firered-leafgreen': {
        back_default: null;
        back_shiny: null;
        front_default: null;
        front_shiny: null;
      };
      'ruby-sapphire': {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
      };
    };
    'generation-iv': {
      'diamond-pearl': {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      'heartgold-soulsilver': {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      platinum: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    'generation-v': {
      'black-white': {
        animated: {
          back_default: string;
          back_female: string;
          back_shiny: string;
          back_shiny_female: string;
          front_default: string;
          front_female: string;
          front_shiny: string;
          front_shiny_female: string;
        };
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    'generation-vi': {
      'omegaruby-alphasapphire': {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
      'x-y': {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    'generation-vii': {
      icons: {
        front_default: string;
        front_female: null;
      };
      'ultra-sun-ultra-moon': {
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
      };
    };
    'generation-viii': {
      icons: {
        front_default: string;
        front_female: null;
      };
    };
  };
}
interface MoveEntry {
  move: MoveData;
  version_group_details: VersionGroupDetail[];
}

interface MoveData {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

export interface ListPokemonByType {
  pokemon: {
    name: string;
    url: string;
  };
  slot: number;
}

export type PokemonElementType =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water';
