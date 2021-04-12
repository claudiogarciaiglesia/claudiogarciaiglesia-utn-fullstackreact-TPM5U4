import React from 'react'
import { NavBar } from './components/ui/NavBar/NavBar'
import { TitleBar } from './components/ui/TitleBar'

export const App = () => {
    return (
        <div>
            <TitleBar title='Biblioteca Le Nerd' />
            <NavBar />
        </div>
    )
}