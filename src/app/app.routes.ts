import { Routes } from '@angular/router';
import { ITEMS_PATHS, POKEMON_PATHS, REGIONS_PATHS, ROOT_PATHS } from './core/path.constants';
import { Home } from './features/home/home';
import { Regions } from './features/regions/regions';
import { Pokemons } from './features/pokemons/pokemons';
import { Items } from './features/items/items';
import { PageNotFound } from './features/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: ROOT_PATHS.base,
        component: Home,
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: REGIONS_PATHS.base,
        component: Regions,
    },
    {
        path: POKEMON_PATHS.base,
        component: Pokemons,
    },
    {
        path: ITEMS_PATHS.base,
        component: Items,
    },
    {
        path: '**',
        component: PageNotFound,
    },
];
