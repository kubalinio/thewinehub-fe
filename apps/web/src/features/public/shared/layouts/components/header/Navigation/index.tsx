import Link from 'next/link'
import { Separator } from 'shared/components/ui/Separator'
import AddOffer from './AddOffer'
import Bookmark from './Bookmark'
import Account from './Account'
import { NavItem } from 'shared/components/ui/NavItem'

type Props = {}

export default function Navigation({ }: Props) {
    return (
        <nav className='flex items-center'>
            <Separator orientation='vertical' className='w-[1px]' />
            <NavItem className='flex items-center h-full px-6 text-center' asChild>
                <Link href={'/'}>
                    Give Feedback
                </Link>
            </NavItem>
            <Separator orientation='vertical' className='w-[1px]' />
            <AddOffer />
            <Separator orientation='vertical' className='w-[0.5px]' />
            <Bookmark />
            <Separator orientation='vertical' className='w-[1px]' />
            <Account />
        </nav>
    )
}