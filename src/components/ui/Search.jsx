import React from 'react'

export const Search = () => {
    return (
        <div className="search-input-container">
            <div className="input-group search-input">
                <input name="buscar" type="text" className="form-control" placeholder="Buscar..." aria-label="buscar" aria-describedby="basic-addon1"></input>
                <span className="input-group-text" id="basic-addon1">&#128269;</span>
            </div>
        </div>
    )
}
