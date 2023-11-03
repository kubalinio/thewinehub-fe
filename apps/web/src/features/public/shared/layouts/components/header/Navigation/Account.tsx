import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { NavItem } from 'shared/components/ui/NavItem'
import { cn } from 'shared/lib/utils'

type Props = {}

export default function Account({ }: Props) {
    return (
        <NavItem className='flex items-center h-full px-6 -mr-4 text-center'>
            <FaRegCircleUser className='text-xl' />
        </NavItem>
    )
}