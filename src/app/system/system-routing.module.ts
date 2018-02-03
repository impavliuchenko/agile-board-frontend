import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuardService} from '../shared/service/guard/auth-guard.service';
import {DiagramsComponent} from './diagrams/diagrams.component';
const systemRoutes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuardService], children: [
    {path: 'diagrams', component: DiagramsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
