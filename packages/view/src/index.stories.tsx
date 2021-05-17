import React from 'react';
import { Story, Meta } from '@storybook/react';

import { App } from './index';

export default {
  title: 'App',
  component: App,
} as Meta;

const Template: Story = () => <App />;
export const Example = Template.bind({});
