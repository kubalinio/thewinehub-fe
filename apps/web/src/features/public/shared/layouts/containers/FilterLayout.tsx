
import { ReactNode } from 'react'
import Sidebar from '../components/filterLayout/Sidebar'

type Props = {
    children: ReactNode
}

export default function FilterLayout({ children }: Props) {
    return (
        <main className='flex w-full'>
            <Sidebar />
            <section className='flex-1 bg-gray-950 h-[calc(100vh-80px)]'>
                {children}
            </section>
        </main>
    )
}

