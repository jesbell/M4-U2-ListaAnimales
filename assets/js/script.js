//Creando las clases para el ejercicio
//Clase Propietario
class Propietario {
    constructor(name, adress, phone){
        this._name = name;
        this._adress = adress;
        this._phone = phone;
    }

    datosPropietario(){
        return `El nombre del dueño es: ${this._name}. El domicilio es: ${this._adress}, y el número telefóni de contacto: ${this._phone}.`
    }

}
//Clase hija Animal (de Propietario)
class Animal extends Propietario{
    constructor(name, adress, phone, tipo){
        super(name, adress, phone);
        this._tipo = tipo;
    }

    get tipo(){
        return `El tipo de animal es un ${this._tipo}`;
    }
}
//Clase hija Mascota ( de Animal)
class Mascota extends Animal{
    constructor(name, adress, phone, tipo, namePet){
        super(name, adress, phone, tipo);
        this._namePet = namePet;
    }

    get namePet(){
        return this._namePet;
    }

    set namePet(newNamePet){
        this._namePet = newNamePet;
    }
}

