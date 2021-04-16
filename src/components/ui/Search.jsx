import React from 'react'

export const Search = () => {
    return (
        <div className="search-input">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">&#128269;</span>
                <input name="buscar" type="text" className="form-control" placeholder="Buscar..." aria-label="buscar" aria-describedby="basic-addon1"></input>
            </div>
        </div>
    )
}
