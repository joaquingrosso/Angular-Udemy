
//los arreglos arrancan desde le indice 0

//let habilidades : (any)[];      //any tipo de dato admite todo
let habilidades : (string | number | boolean)[];  

habilidades = [1,'Hola',true];  //no declaro el tipo de dato y puedo meter distintos tipos ne el arreglo

habilidades.push(true);

let habilidades2 = ['Hola','Chau']; //al tener el mismo tipo de dato se le asigna el mismo al arreglo


//Las interfaces no se transcriben a codigo de JS pero nos sirven para restringir  la funcionalidad del programa 
//y ademas para la documentacion del mismo
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string   //el signo ? indica que es opcional
}

const personaje: Personaje = {   
    nombre: 'Pepe',
    //apellido: string,  no se pueden declarar tipos solo valores
    hp: 100,
    habilidades: ['Bash','Counter', 'Healing']
}; 

const personaje2: Personaje = {   
    nombre: 'Juan',
    hp: 100,
    habilidades: ['Bash','Counter', 'Healing'],
    puebloNatal: 'Cordoba'
}; 

console.table(personaje);


