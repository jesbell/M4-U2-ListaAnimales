//Creando las clases para el ejercicio
//Clase Propietario
class Propietario {
    constructor(name, adress, phone){
        this._name = name;
        this._adress = adress;
        this._phone = phone;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get adress(){
        return this._adress;
    }

    set adress(newAdress){
        this._adress = newAdress;
    }

    get phone(){
        return this._phone;
    }

    set phone(newphone){
        this._phone = newphone;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this._name}. El domicilio es: ${this._adress}, y el número telefonico de contacto: ${this._phone}.`
    }

}
//Clase Animal (hija de clase Propietario)
class Animal extends Propietario{
    constructor(name, adress, phone, tipo){
        super(name, adress, phone);
        this._tipo = tipo;
    }

    get tipo(){
        return `El tipo de animal es un ${this._tipo}`;
    }
}
//Clase Mascota ( hija de clase Animal)
class Mascota extends Animal{
    constructor(name, adress, phone, tipo, namePet, enfermedad){
        super(name, adress, phone, tipo);
        this._namePet = namePet;
        this._enfermedad = enfermedad;
    }

    get namePet(){
        return this._namePet;
    }

    set namePet(newNamePet){
        this._namePet = newNamePet;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(newEnfermedad){
        this._enfermedad = newEnfermedad;
    }
};


const agregar = document.getElementById('agregar');
agregar.addEventListener('click',observando);

function agregando() {
    const nombre = document.getElementById("propietario").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const nombreMascota = document.getElementById("nombreMascota").value;
    const tipo = document.getElementById("tipo").value;
    const enfermedad = document.getElementById("enfermedad").value;
    const pet = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
    return pet;
}

function observando(){
    const petData = agregando();
    const dataOwn = petData.datosPropietario();
    const tipo = petData.tipo;
    const nombre = petData.name;
    const namePet = petData.namePet;
    const enfermedad = petData.enfermedad;
    console.log(dataOwn);
    console.log(nombre);

    const data = document.getElementById('resultado');
    const p = document.createElement('li');
    const p1 = document.createElement('li');
    p.innerHTML = ` ${dataOwn}  `;
    data.appendChild(p);
    p1.innerHTML = `${tipo}, mientras que el nombre de la mascota es: ${namePet} y la enfermedad es: ${enfermedad}`;
    data.appendChild(p1);

}
