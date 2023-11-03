import { BsBookmarkHeart } from "react-icons/bs"
import { NavItem } from "shared/components/ui/NavItem"

type Props = {}

export default function Bookmark({ }: Props) {
    return (
        <NavItem className='flex items-center h-full px-6 text-center'>
            <BsBookmarkHeart className='text-xl' />
        </NavItem>
    )
}