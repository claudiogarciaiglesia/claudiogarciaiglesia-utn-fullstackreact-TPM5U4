import React from 'react'

export const BookRow = ({ book }) => {
    console.log(book);
    return (
        <div className="bookrow-container">
            <div className="book-cell book-id-cell">{book.id}</div>
            <div className="book-cell book-name-cell">{book.nombre}</div>
            {/* <ShrinkText text={book.description} /> */}
            <div className="book-cell book-description-cell"><span>{book.descripcion}</span></div>
        </div>
    )
}
