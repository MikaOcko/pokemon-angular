import { Routes } from '@angular/router';
import { ITEMS_PATHS, POKEMON_PATHS, REGIONS_PATHS, ROOT_PATHS } from './core/path.constants';
import { Home } from './features/home/home';

export const routes: Routes = [
    {
        path: ROOT_PATHS.base,
        loadChildren: async () =>
        import('./features/home/home').then((module) => module.HOME_ROUTES),
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: REGIONS_PATHS.base,
        loadChildren: async () =>
        import('./features/regions/regions').then((module) => module.HOME_ROUTES),
    },
    {
        path: POKEMON_PATHS.base,
        loadChildren: async () =>
        import('./features/pokemons/pokemons').then((module) => module.HOME_ROUTES),
    },
    {
        path: ITEMS_PATHS.base,
        loadChildren: async () =>
        import('./features/items/items').then((module) => module.HOME_ROUTES),
    },
];
