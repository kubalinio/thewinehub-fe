
import { ReactNode } from 'react'
import Sidebar from '../components/filterLayout/Sidebar'
import ChoosenFillters from '@/features/public/bikes/containers/ChoosenFillters'

type Props = {
    children: ReactNode
}

export default function FilterLayout({ children }: Props) {
    return (
        <main className='flex w-full h-[calc(100vh-80px)]'>
            <Sidebar />
            <section className='flex-1 bg-gray-950 '>
                <ChoosenFillters />
                {/* h-[calc(100vh-140px)] */}
                <div className='overflow-y-auto h-[calc(100vh-140px)]'>
                    {children}
                </div>
            </section>
        </main>
    )
}