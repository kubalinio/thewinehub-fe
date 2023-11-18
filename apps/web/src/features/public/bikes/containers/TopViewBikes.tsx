import { BikeData } from '@/app/(public)/bikes/page'
import { Target } from 'lucide-react'

import BikeCard from '../components/TopViewBikes/BikeCard'

type Props = {
    bikes: BikeData[]
}

export default function TopViewBikes({ bikes }: Props) {
    const repeatedBikes = Array.from({ length: 4 }, () => bikes[0]);

    return (
        <section className='px-10'>
            <div className='flex items-center gap-2 pb-1 pl-2 pr-3 my-6 border-b-4 border-red-800 w-fit'>
                <Target />
                <h1 className='text-2xl font-bold '>
                    Top View Bikes
                </h1>
            </div>

            <div className='flex flex-row flex-wrap justify-center gap-5'>
                {repeatedBikes.map(bike => (
                    <BikeCard key={bike.id} bike={bike} />
                ))}
            </div>
        </section>
    )
}