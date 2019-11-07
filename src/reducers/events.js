import _ from 'lodash'
import { READ_EVENTS, DELETE_EVENT, } from '../actions'
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
       default :
          return events
    }
}