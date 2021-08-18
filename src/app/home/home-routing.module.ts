import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppendixesContentComponent } from './appendixes-content/appendixes-content.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { FinancialHighlightsComponent } from './financial-highlights/financial-highlights.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path: 'appendixes-content',
    component: AppendixesContentComponent
  },
  {
    path: 'financial-highlights',
    component: FinancialHighlightsComponent
  },
  {
    path: 'presidents-message',
    component: MessageComponent
  },
  {
    path: 'board-of-directors',
    component: BoardOfDirectorsComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }