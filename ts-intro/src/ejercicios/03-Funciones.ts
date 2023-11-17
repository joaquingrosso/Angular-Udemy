
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
function sumar1(a, b){
    return a + b;
}

function sumar2(a:number, b:number):number{
    return a + b;
}

let resultado1 = sumar1('Fernando', ' Herrera');

//resultado1 = sumar2('Fernando', ' Herrera'); error recibe un string en vez de un number

let resultado2 = sumar2(1, 2);

const sumarFlecha1 = (a, b) => {
    return a + b;
}

//con tipos especificados
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

//los argumentos opcionales van al final, el valor por defecto se pisa si enviamos un parametro, como en el parametro "base"
function multiplicar(numero:number, base:number = 4, otroNumero?:number):number{
    return numero * base;
}

//const resultado3 = multiplicar(10,2);
//console.log(resultado3);

//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------

interface PersonajeWow{
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar(pj: PersonajeWow, curarX: number): void {  
    pj.pv += curarX;
}

const nuevoPersonaje: PersonajeWow = {
    nombre: 'Ezquiel',
    pv: 50,    
    mostrarPv() {
        console.log('Puntos de vida: ', this.pv);
    }
}



curar(nuevoPersonaje, 50);
nuevoPersonaje.mostrarPv();