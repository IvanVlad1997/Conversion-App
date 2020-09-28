import {Vector} from './vector'

export const LUNGIME: Vector = {
    setUnitati: ['mm', 'cm','dm', 'm','dec','hm','km'],
    // setUnitatiNume: ['Milimetri','Centimetri', 'Decimetri','Metri','Decametri','Hectometri','Kilometri'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001],
    principal: 'm',
    valoareInPlus: 0,
    units: ['m', 'm'],
    numbers: [0, 0],
    lungime: 2
}

export const TIMP: Vector = {
    setUnitati: ['us', 'ms','s', 'm','h'],
    // setUnitatiNume: ['Microsecunde','Milisecunde', 'Secunde','Minute','Ore'],
    setValoriDinUnitate: [0.00001, 0.001, 1, 60, 3600],
    setValoriInUnitate: [100000, 1000, 1, 0.016666666666667, 0.00027777777777778],
    principal: 's',
    valoareInPlus: 0,
    units: ['s', 's'],
    numbers: [0, 0],
    lungime: 2
}

export const VOLUM: Vector = {
    setUnitati: ['ml', 'cl','dl', 'l','dal','hl','kl'],
    // setUnitatiNume: ['Mililitri','Centilitri', 'Decilitri','Litri','Decalitri','Hectolitri','Kilolitri'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001],
    principal: 'l',
    valoareInPlus: 0,
    units: ['l', 'l'],
    numbers: [0, 0],
    lungime: 2
}

export const MASA: Vector = {
    setUnitati: ['mg', 'cg','dg', 'g','dag','hg','kg','tona'],
    // setUnitatiNume: ['Miligrame','Centigrame', 'Decigrame','Grame','Decagrame','Hectograme','Kilograme','Tone'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000, 1000000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001, 0.000001],
    principal: 'g',
    valoareInPlus: 0,
    units: ['g', 'g'],
    numbers: [0, 0],
    lungime: 2
}