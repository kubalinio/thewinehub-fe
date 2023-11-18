import { BikeData } from '@/app/(public)/bikes/page'
import { BikeIcon, Bookmark } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter, Button } from 'shared/components/ui'

type Props = { bike: BikeData }

export default function BikeCard({ bike }: Props) {
    return (
        <Card key={bike.bikeName} className='flex flex-col justify-between overflow-hidden border-gray-800 w-fit'>
            <CardHeader className='relative p-0'>
                <Link href={`/bikes/${bike.id}`}>
                    <Image src={bike.image} alt={bike.bikeName} width={250} height={250} className='rounded-t-lg' />
                    <div className='absolute w-6 h-6 text-center bg-gray-300 rounded-full top-2 left-2'>
                        <BikeIcon className='p-1' />
                    </div>
                </Link>
            </CardHeader>
            <CardContent className='px-4 pt-6'>
                <CardTitle className='mb-1'>{bike.bikeName}</CardTitle>
                <CardDescription>{bike.color}</CardDescription>
            </CardContent>
            <CardFooter className='flex justify-between w-full px-4 gap-x-6'>
                <Button variant='secondary' className='w-full'>Details</Button>
                <Button variant='default' className='group'>
                    <Bookmark className='w-5 group-hover:fill-red-800' />
                </Button>
            </CardFooter>
        </Card>
    )
}