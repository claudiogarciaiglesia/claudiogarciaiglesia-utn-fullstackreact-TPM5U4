import React from 'react'
import { TitleBar } from './components/ui/TitleBar'
import './style.css';

export const App = () => {
    return (
        <div className="web-page">
            <TitleBar title='Biblioteca Le Nerd' />
        </div>
    )
}