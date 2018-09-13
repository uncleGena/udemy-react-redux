// action creator, return an action
export function selectBook (book) {
  console.log('asdfasdfasd fd asdf saf ::', book)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
} 