import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { IdentifyGuard } from "../identify/identify-guard.service";
import { GroupInfoComponent } from './group-info/group-info.component';
import { GroupeComponent } from './groupe.component';

const routes: Routes = [
    {
        path: 'groups',
        canActivate: [IdentifyGuard],
        children: [
            {
                path: 'info/:id',
                component: GroupInfoComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutesModule {
}
