import React from 'react'
import { Menu } from './Menu';
import { Search } from './Search';

export const TitleBar = ({ title }) => {
    return (
        <div className="title-bar">
            <span className="title">{title}</span>
            <Search />
            <Menu />
        </div>
    )
}
