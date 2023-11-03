import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { Badge } from 'shared/components/ui/Badge'
import { NavItem } from 'shared/components/ui/NavItem'
import { cn } from 'shared/lib/utils'

type Props = {}

export default function Account({ }: Props) {
    return (
        <NavItem className='flex items-center h-full px-6 -mr-4 text-center text-gray-400 pointer-events-none'>
            <FaRegCircleUser className='text-xl' />
            <Badge variant="soon" className="absolute right-1 top-3 rotate-12">
                Soon
            </Badge>
        </NavItem>
    )
}