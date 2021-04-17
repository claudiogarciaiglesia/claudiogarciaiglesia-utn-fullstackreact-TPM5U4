const initialState = {
    loading: false,
    bookList: []
};

export const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'startLoadCatalogue':
            console.log('start loading catalogue');
            return {
                ...state,
                loading: true
            }

        case 'loadCatalogueComplete':
            console.log('complete loading catalogue');
            return {
                ...state,
                loading: false,
                bookList: action.payload
            }


        // case 'reset':
        //     return initialState;

        default:
            return state;
    }
}