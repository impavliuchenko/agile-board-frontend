import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SystemComponent } from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import {SharedModule} from '../shared/shared.module';
import { BoardComponent } from './board/board.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import {DropdownDirective} from './shared/directive/dropdown.directive';
import {TicketFilterPipe} from './shared/pipe/ticketFilter.pipe';

@NgModule({
  declarations: [
    SystemComponent,
    BoardComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    TicketFilterPipe
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ]
})
export class SystemModule {}
