'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'shared/components/ui/Accordion'
import { Badge } from 'shared/components/ui/Badge'

type Props = {}

// Must use Client Component
const SizeData = [
    {
        name: 'Children',
        query: 'dz'
    },
    {
        name: 'XS (13-14.5"/36-45 cm)',
        query: 'xs'
    },
    {
        name: 'XXS (13-13.5")',
        query: 'xxs'
    },
    {
        name: 'S (15-16.5"/46-50 cm)',
        query: 's'
    },
    {
        name: 'M (17-18.5"/51-54 cm)',
        query: 'm'
    },
    {
        name: 'L (19-20.5"/55-58 cm)',
        query: 'l'
    },
    {
        name: 'XL (21-22.5"/59-62 cm)',
        query: 'xl'
    },
]

export default function Size({ }: Props) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='px-6 border-b border-gray-600 '>
                <AccordionTrigger>
                    <p className='text-base'>Size</p>
                </AccordionTrigger>
                <AccordionContent>
                    {SizeData.map(producer => (
                        <button key={producer.query}>
                            <Badge variant='outline' className='text-sm'>
                                {producer.name}
                            </Badge>
                        </button>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}