import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions/index'
import _ from 'lodash'

export default function (state = {}, action) {


  switch (action.type) {
    case FETCH_POSTS:
      const mappedKeys = _.mapKeys(action.payload.data, 'id')
      return mappedKeys

    case FETCH_POST:
      const post = action.payload.data
      return { ...state, [post.id]: post }

    case DELETE_POST:
      return _.omit(state, action.payload)

    default:
      return state
  }
}