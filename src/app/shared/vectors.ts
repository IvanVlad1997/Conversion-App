import {Vector} from './vector'

export const LUNGIME: Vector = {
    setUnitati: ['Milimetri','Centimetri', 'Decimetri','Metri','Decametri','Hectometri','Kilometri'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001],
    principal: 'Metri',
    valoareInPlus: 0,
    units: ['Metri', 'Metri'],
    numbers: [0, 0],
    lungime: 2
}

export const TIMP: Vector = {
    setUnitati: ['Microsecunde','Milisecunde', 'Secunde','Minute','Ore'],
    setValoriDinUnitate: [0.00001, 0.001, 1, 60, 3600],
    setValoriInUnitate: [100000, 1000, 1, 0.016666666666667, 0.00027777777777778],
    principal: 'Secunde',
    valoareInPlus: 0,
    units: ['Secunde', 'Secunde'],
    numbers: [0, 0],
    lungime: 2
}

export const VOLUM: Vector = {
    setUnitati: ['Mililitri','Centilitri', 'Decilitri','Litri','Decalitri','Hectolitri','Kilolitri'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001],
    principal: 'Litri',
    valoareInPlus: 0,
    units: ['Litri', 'Litri'],
    numbers: [0, 0],
    lungime: 2
}

export const MASA: Vector = {
    setUnitati: ['Miligrame','Centigrame', 'Decigrame','Grame','Decagrame','Hectograme','Kilograme','Tone'],
    setValoriDinUnitate: [0.001, 0.01, 0.1, 1, 10, 100, 1000, 1000000],
    setValoriInUnitate: [1000, 100, 10, 1, 0.1, 0.01, 0.001, 0.000001],
    principal: 'Grame',
    valoareInPlus: 0,
    units: ['Grame', 'Grame'],
    numbers: [0, 0],
    lungime: 2
}