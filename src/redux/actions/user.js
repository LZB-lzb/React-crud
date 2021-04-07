import { PERSON, ADDPERSON, DELPERSON } from '../constant'

export const Person = personObj => ({ type: PERSON, data: personObj })
export const addPerson = personObj => ({ type: ADDPERSON, data: personObj })
export const delPerson = personObj => ({ type: DELPERSON, data: personObj })