import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Logo({ }: Props) {
    return (
        <Link href={'/'}>
            <h1 className='text-4xl font-bold tracking-wider text-transparent bg-gradient-to-r from-red-900 to-white bg-clip-text'>The Bikes</h1>
        </Link>
    )
}