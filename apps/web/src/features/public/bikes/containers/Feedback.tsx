import { Button } from 'shared/components/ui'

type Props = {}

export default function Feedback({ }: Props) {
    return (
        <section className='flex items-center justify-center w-full py-6 my-10 gap-x-20 border-y'>
            <div>
                <h2 className='mb-1 text-xl font-bold text-white'>Do you have ideas for improvements?</h2>
                <p className='text-xs text-gray-400'>We change our service for you every day.</p>
            </div>

            <Button variant='secondary'>Give Us Feedback</Button>
        </section>
    )
}