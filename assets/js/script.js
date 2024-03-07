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

class Animal extends Propietario{
    constructor(name, adress, phone, tipo){
        super(name, adress, phone);
        this._tipo = tipo;
    }

    get tipo(){
        return `El tipo de animal es un ${this._tipo}`;
    }
}