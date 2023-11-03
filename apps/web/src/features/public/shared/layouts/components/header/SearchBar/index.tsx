'use client'

import { Input } from 'shared/components/ui/Input'
import { BiSearchAlt } from 'react-icons/bi'
import { useRef, useState } from 'react'
import useOutsideClick from 'shared/hooks/useOutsideClick'
import { cn } from 'shared/lib/utils'

type Props = {}

export default function SearchBar({ }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const searchInputRef = useRef(null)
    const searchContentRef = useRef(null)

    const handleClick = () => {
        if (!isOpen) {
            searchInputRef.current.focus()
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }

    useOutsideClick(searchContentRef, () => {
        if (isOpen) setIsOpen(false);
    });

    return (
        <div>
            <div onClick={handleClick} className={cn('flex items-center transition-all duration-200 border border-gray-500 gap-x-4 hover:border-red-800  rounded-md', {
                'border-red-800': isOpen === true
            })}>
                <BiSearchAlt className='mx-2 text-2xl' />
                <Input variant='nav' ref={searchInputRef} className='pointer-events-none' />
            </div>

            {/* {isOpen && (
                <div ref={searchContentRef} >
                    <ul>
                        <li>Searches</li>
                    </ul>
                </div>
            )} */}

        </div>
    )
}