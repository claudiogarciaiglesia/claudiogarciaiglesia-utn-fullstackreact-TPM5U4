import React from 'react'
import { Search } from './Search';
import './TitleBar.css';

export const TitleBar = ({ title }) => {
    return (
        <div>
            <div className="title-bar" >
                <span className="title">{title}</span>
                <Search/>
            </div>
        </div>
    )
}
