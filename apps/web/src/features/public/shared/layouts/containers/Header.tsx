import React from 'react'
import Logo from '../components/header/Logo'
import SearchBar from '../components/header/SearchBar'
import Navigation from '../components/header/Navigation'

export default function Header() {
    return (
        <header className='flex justify-between w-full h-[80px] border-b border-gray-600 bg-gray-950 px-4'>
            <div className='flex items-center justify-start gap-x-8'>
                <Logo />
                <SearchBar />
            </div>
            <Navigation />
        </header>
    )
}

