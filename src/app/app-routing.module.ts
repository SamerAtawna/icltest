import { MapComponent } from './map/map.component';
import { FaceidComponent } from './faceid/faceid.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FingerprintComponent } from './fingerprint/fingerprint.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'finger', component: FingerprintComponent },
  { path: 'faceid', component: FaceidComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
