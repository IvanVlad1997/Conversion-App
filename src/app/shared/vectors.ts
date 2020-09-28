import {Vector} from './vector'

export const LUNGIME: Vector = {
    setUnitati: ['mm', 'cm','dm', 'm','dec','hm','km'],
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
    setValoriDinUnitate: [0.00001, 0.001, 1, 60, 3600],
    setValoriInUnitate: [100000, 1000, 1, 0.016666666666667, 0.00027777777777778],
    principal: 's',
    valoareInPlus: 0,
    units: ['s', 's'],
    numbers: [0, 0],
    lungime: 2
}