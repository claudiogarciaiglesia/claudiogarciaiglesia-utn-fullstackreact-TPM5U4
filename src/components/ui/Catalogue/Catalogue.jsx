import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookList } from './BookList';

// const bookList = [{
//     id: 1,
//     name: 'bookname1',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     category: 'category',
//     borrowed: 'john doe'
// },
// {
//     id: 2,
//     name: 'bookname2',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     category: 'category',
//     borrowed: 'john doe'
// },
// {
//     id: 3,
//     name: 'bookname3',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     category: 'category',
//     borrowed: 'john doe'
// },
// {
//     id: 4,
//     name: 'bookname4',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     category: 'category',
//     borrowed: 'john doe'
// }
// ]


const getBookList = async (dispatch) => {

    let action = {
        type: 'startLoadCatalogue'
    }

    dispatch(action);
    
    try {

        const url = `${process.env.REACT_APP_API_URL}libro`;
        const response = await axios(url);

        if (response.status === 200) {
            action = {
                type: 'loadCatalogueComplete',
                payload: response.data
            }
            dispatch(action)
        }

    } catch (error) {
        console.log(`Error al intentar cargar la lista de libros: ${error.message}`);
    }

}

export const Catalogue = () => {

    const dispatch = useDispatch();
    const bookList = useSelector(state => state.bookList)

    useEffect(() => {

        getBookList(dispatch);

    }, [dispatch])

    return (
        <div className="catalogue-container">
            <h1>CATALOGUE</h1>
            <BookList bookList={bookList} />
        </div>
    )
}
