// import { Meta, StoryObj } from '@storybook/react'

// import { Button } from './button'

// const meta: Meta = {
//     title: 'Button',
//     component: Button,
//     parameters: {
//         layout: 'centered'
//     },
//     argTypes: {
//         // children: {
//         //   control: 'button',
//         // },
//     },
//     tags: ['autodocs'],
// } satisfies Meta<typeof Button>

// export default meta
// type Story = StoryObj<typeof meta>

// export const Primary: Story = {
//     args: {
//         variant: 'default',
//         size: 'default',
//         children: 'Button'
//     },
// }

import { Meta, StoryObj } from '@storybook/react'
import { DatePickerWithRange } from './DateRangePicker'

const meta: Meta = {
    title: 'Date Range Picker',
    component: DatePickerWithRange,
    parameters: {
        layout: 'centered'
    },
    argTypes: {

    },
    tags: ['autodocs'],
} satisfies Meta<typeof DatePickerWithRange>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {

}