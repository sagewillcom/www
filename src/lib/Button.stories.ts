import Button from '../lib/Button.svelte'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
	title: 'Example/Button',
	component: Button
}

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
	Component: Button,
	props: args
})

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({})
Primary.args = {
	label: 'Button'
}
