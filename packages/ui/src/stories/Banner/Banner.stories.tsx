import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from '../../components/Banner/';
import { ThemeProvider } from '../../utils/ThemeProvider';

export default {
  title: 'Example/Banner',
  component: Banner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>
);

export const BannerStory = Template.bind({});
BannerStory.args = {};
