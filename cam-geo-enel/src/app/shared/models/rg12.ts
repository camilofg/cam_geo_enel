import { Proyecto } from './proyecto.model';
import { Circuito } from './circuito.model';

export class Rg12 {
    id : number;
    movimiento : string;
    unidad_responsable : string; 
    no_descargo_pdl : string;     
    fecha_ejecucion : Date;                  
    proyecto : Proyecto; 
    gom : string; 
    circuito : Circuito;     
    punto_fisico : string;    
    coord_x : string;     
    coord_y : string;     
    norma : string;                  
    material : string;
    altura : number; 
    carga_rotura : number;     
    cantidad_circuitos : number; 
    puesta_tierra : boolean;                  
    material_cable_guarda : string; 
    zona : string;     
    propiedad : string;    
    operacion : boolean;
}
