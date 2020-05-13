// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  NOMINATIM_URL: 'http://nominatim.openstreetmap.org/search',
  DATATABLE_DATA_URL: 'https://angular-datatables-demo-server.herokuapp.com/',
  POPULATION_URL: 'http://api.population.io:80/1.0/wp-rank/1920-01-01/unisex/',
  TITLE_LAYER_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION_URL: 'https://www.openstreetmap.org/copyright'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

