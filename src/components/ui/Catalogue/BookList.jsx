import React from 'react'
import { BookRow } from './BookRow'

export const BookList = ({ bookList = [] }) => {
    return (
        <div className="booklist-container">
            {bookList.map(book => {
                return (<BookRow key={book.id} book={book} />)
            })}
        </div>
    )
}
