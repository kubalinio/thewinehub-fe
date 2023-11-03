'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'shared/components/ui/Accordion'
import { cn } from 'shared/lib/utils'

type Props = {}

// Must use Client Component
const ColorData = [
    {
        name: 'Black',
        query: 'black',
        value: 'bg-black'
    },
    {
        name: 'Gray',
        query: 'gray',
        value: 'bg-gray-400'
    },
    {
        name: 'Red',
        query: 'red',
        value: 'bg-red-600'
    },
]

export default function Color({ }: Props) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='px-6 border-b border-gray-600 '>
                <AccordionTrigger>
                    <p className='text-base'>Color</p>
                </AccordionTrigger>
                <AccordionContent>
                    <div className='flex flex-col w-full gap-4'>
                        {ColorData.map(color => (
                            <button key={color.query} className='flex items-center w-full gap-4 pl-1 text-sm'>
                                <span className={cn('rounded-full w-5 h-5', {
                                    [`${color.value}`]: color.value
                                })} />
                                {color.name}
                            </button>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}