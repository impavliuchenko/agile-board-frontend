import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';
import {AuthGuardService} from '../shared/service/guard/auth-guard.service';
import {BoardComponent} from './board/board.component';
const systemRoutes: Routes = [
  {path: 'system', component: SystemComponent, canActivate: [AuthGuardService], children: [
    {path: 'board', component: BoardComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(systemRoutes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
