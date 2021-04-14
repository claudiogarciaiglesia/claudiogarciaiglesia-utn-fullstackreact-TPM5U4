import React from 'react'

export const Search = () => {
    return (
        <div>
            <div class="input-group mb-3 search-input">
                <span class="input-group-text" id="basic-addon1">&#128269;</span>
                <input name="buscar" type="text" class="form-control" placeholder="Buscar..." aria-label="buscar" aria-describedby="basic-addon1"></input>
            </div>
        </div>
    )
}
