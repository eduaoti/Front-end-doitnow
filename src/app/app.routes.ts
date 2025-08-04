import { Routes } from '@angular/router';
import { TareasComponent } from './pages/tareas/tareas.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { RecompensasComponent } from './pages/recompensas/recompensas.component';

export const routes: Routes = [
  { path: '', redirectTo: 'tareas', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'recompensas', component: RecompensasComponent },
  { path: '**', redirectTo: 'tareas' } // ruta comodín
];
