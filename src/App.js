import React from 'react'
import { Catalogue } from './components/ui/Catalogue/Catalogue';
import { TitleBar } from './components/ui/TitleBar'
import './style.css';

export const App = () => {
    return (
        <div className="web-page">
            <TitleBar title='Le Nerd Library &#128218;' />
            <Catalogue />
        </div>
    )
}