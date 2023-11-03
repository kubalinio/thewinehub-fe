import React from 'react'
import Price from './Price'
import Producer from './Producer'
import Size from './Size'
import Color from './Color'

type Props = {}

export default function Sidebar(props: Props) {
    return (
        <section className='flex flex-col bg-gray-900 w-[360px] border-r border-gray-600 overflow-auto max-h-[calc(100vh-80px)]'>
            <div className='border-b border-gray-600'>
                <h3 className='px-6 py-4 text-xl'>Filters</h3>
            </div>
            <Price />
            <Producer />
            <Size />
            <Color />
        </section>
    )
}

