import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT, READ_EVENT, UPDATE_EVENT, CREATE_EVENT} from '../actions'
import { id } from 'postcss-selector-parser'

export default (events = {}, action) => {
    //ここの引数の使い方は要チェック
    switch (action.type){
        case READ_EVENTS:
            //console.log(action.response.data)
            console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            console.log(action.id)
            delete events[action.id]
            return { ...events } 
        case READ_EVENT:
        case UPDATE_EVENT:
        case CREATE_EVENT:
            console.log(action.response.data)
            const data = action.response.data
            return { ...events, [data.id]: data }

       default :
          return events
    }
}