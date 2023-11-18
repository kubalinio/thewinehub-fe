import React from 'react'
import { Badge } from 'shared/components/ui/Badge'

type Props = {}

export default function ChoosenFillters({ }: Props) {
    return (
        <section className='px-6 flex items-center border-b border-gray-600 h-[60px]'>
            <div className='flex gap-4'>
                <button>
                    <Badge variant='outline' className='px-3 py-[6px] text-base'>
                        popular
                    </Badge>
                </button>
                <button>
                    <Badge variant='outline' className='px-3 py-[6px] text-base'>
                        the cheapest
                    </Badge>
                </button>
                <button>
                    <Badge variant='outline' className='px-3 py-[6px] text-base'>
                        newest
                    </Badge>
                </button>
            </div>
        </section>
    )
}