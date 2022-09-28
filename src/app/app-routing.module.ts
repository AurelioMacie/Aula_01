import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItemDetailComponent } from "./componentes/item-detail/item-detail.component";
import { ListRenderComponent } from "./componentes/list-render/list-render.component";
import { PrimeiroComponenteComponent } from "./componentes/primeiro-componente/primeiro-componente.component";

const routes: Routes = [
    {path: '', component: PrimeiroComponenteComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'list/:id', component: ItemDetailComponent},
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}