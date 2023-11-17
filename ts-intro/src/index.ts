/*
    ===== Código de TypeScript =====
*/


interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe{
    nombre: String;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}


const superheroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.pais + ', ' + this.direccion.ciudad;
    }
}

const direccion=superheroe.mostrarDireccion();
console.log(direccion);