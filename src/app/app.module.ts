import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HEADERComponent } from './COMPONENTES/header/header.component';
import { MENUComponent } from './COMPONENTES/menu/menu.component';
import { BODYComponent } from './COMPONENTES/body/body.component';
import { CONTENIDOComponent } from './COMPONENTES/contenido/contenido.component';
import { TABLACONTACTENOSComponent } from './COMPONENTES/tabla-contactenos/tabla-contactenos.component';
import { VentaComponent } from './html/venta/venta.component';
import { VitaminaComponent } from './html/vitamina/vitamina.component';
import { MedicamentosComponent } from './html/medicamentos/medicamentos.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { DestacadosComponent } from './html/destacados/destacados.component';
import { ContactenosComponent } from './html/contactenos/contactenos.component';
import { AccesoComponent } from './html/acceso/acceso.component';
import { AgregarUsuariosComponent } from './html/agregar-usuarios/agregar-usuarios.component';
import { CuidadoPersonalComponent } from './html/cuidado-personal/cuidado-personal.component';

const router: Routes=[
  {path: 'vitamina',
  component: VitaminaComponent},
  {path: 'destacados',
  component: DestacadosComponent},
  {path: 'acceso',
  component: AccesoComponent},
  {path: 'agregar-usuarios',
  component: AgregarUsuariosComponent},
  {path: 'contactenos',
  component: ContactenosComponent},
  {path: 'cuidado-personal',
  component: CuidadoPersonalComponent},
  {path: 'venta',
  component: VentaComponent},
  {path: 'medicamentos',
  component: MedicamentosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HEADERComponent,
    MENUComponent,
    BODYComponent,
    CONTENIDOComponent,
    TABLACONTACTENOSComponent,
    VentaComponent,
    VitaminaComponent,
    MedicamentosComponent,
    DestacadosComponent,
    ContactenosComponent,
    AccesoComponent,
    AgregarUsuariosComponent,
    CuidadoPersonalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
