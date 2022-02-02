export class Detalle {

    idDetalle:number;
    cantidad:number;
    idOrden:number;
    idProducto:number;

    constructor(){
        
    }
    
    
    public setcantidad(v : number) {
        this.cantidad = v;
    }

    public setIdproducto(v : number) {
        this.idProducto = v;
    }
    
}
