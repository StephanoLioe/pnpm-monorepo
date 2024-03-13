import Text from './Text'
import type { Meta, StoryObj } from '@storybook/web-components'
import { fn } from '@storybook/test'
import type { TextProps } from './Text'

const meta: Meta<TextProps> = {
  title: 'Components/Text',
  tags: ['autodocs'],
  render: (args) => Text(args),
  argTypes: {
    tagName: {
      control: { type: 'select' },
      options: [
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'span',
        'br',
        'strong',
        'em',
        'blockquote',
        'q',
        'mark',
        'ins',
        'del',
        'sup',
        'sub',
        'small',
        'i',
        'b',
      ],
    },
  },
  args: {
    tagName: 'p',
    label: 'Text',
  },
}

export default meta
type Story = StoryObj<TextProps>

export const Dynamic: Story = {}

export const h1: Story = {
  args: {
    tagName: 'h1',
  },
}

export const h2: Story = {
  args: {
    tagName: 'h2',
  },
}

export const h3: Story = {
  args: {
    tagName: 'h3',
  },
}

export const h4: Story = {
  args: {
    tagName: 'h4',
  },
}

export const h5: Story = {
  args: {
    tagName: 'h5',
  },
}

export const h6: Story = {
  args: {
    tagName: 'h6',
  },
}
