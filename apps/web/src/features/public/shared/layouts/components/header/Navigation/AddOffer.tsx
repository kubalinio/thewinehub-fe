import { NavItem } from "shared/components/ui/NavItem"
import { Badge } from 'shared/components/ui/Badge'

type Props = {}

export default function AddOffer({ }: Props) {
    return (
        <NavItem className='flex items-center h-full px-6 text-center text-gray-400 pointer-events-none'>
            Add Offer
            <Badge variant="soon" className="absolute right-1 top-3 rotate-12">
                Soon
            </Badge>
        </NavItem>
    )
}