'use client'

import { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'shared/components/ui/Accordion'
import { Slider } from 'shared/components/ui/Slider'
type Props = {}

export default function Price({ }: Props) {
    const [range, setRange] = useState([0, 24]);

    const handleRangeChange = (value) => {
        setRange(value);
    };

    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className='px-6 border-b border-gray-600 '>
                <AccordionTrigger>
                    <p className='text-base'>Price</p>
                </AccordionTrigger>
                <AccordionContent className='pb-4'>
                    <Slider
                        defaultValue={[1000, 10000]}
                        max={15000}
                        min={0}
                        step={1}
                        value={range}
                        onValueChange={handleRangeChange}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}