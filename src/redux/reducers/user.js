import { PERSON, ADDPERSON, DELPERSON } from '../constant'

let initState = [{
    key: 1,
    name: '张三',
    age: 32,
    address: '北京',
},
{
    key: 2,
    name: '李四',
    age: 42,
    address: '上海',
},
{
    key: 3,
    name: '王五',
    age: 32,
    address: '广州',
},]

export default function personReducer(preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case PERSON: return data
        case ADDPERSON: return [...preState, data]
        case DELPERSON: {
            let a = preState.filter(i => i.key !== data.key)
            return a
        }
        default: return preState
    }
}