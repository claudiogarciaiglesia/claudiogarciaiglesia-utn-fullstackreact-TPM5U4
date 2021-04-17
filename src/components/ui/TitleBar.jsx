import React from 'react'
import { Search } from './Search';

export const TitleBar = ({ title }) => {
    return (
        <div className="title-bar">
            <span className="title">{title}</span>
            <Search />
        </div>
    )
}
