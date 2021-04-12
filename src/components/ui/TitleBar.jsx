import React from 'react'
import './TitleBar.css';

export const TitleBar = ({ title }) => {
    return (
        <div>
            <div>
                <h1 className="title-bar">{title}</h1>
            </div>
        </div>
    )
}
