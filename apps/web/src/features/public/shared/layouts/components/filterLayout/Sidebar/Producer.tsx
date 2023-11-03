'use client'

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'shared/components/ui/Accordion'
import { Badge } from 'shared/components/ui/Badge'

type Props = {}

// Must use Client Component
const ProducerData = [
    {
        name: 'Trek',
        query: 'trek'
    },
    {
        name: 'Kross',
        query: 'kross'
    },
    {
        name: 'Romet',
        query: 'romet'
    },
]

export default function Producer({ }: Props) {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='px-6 border-b border-gray-600 '>
                <AccordionTrigger>
                    <p className='text-base'>Producer</p>
                </AccordionTrigger>
                <AccordionContent>
                    {ProducerData.map(producer => (
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