import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatars } from '../../components/avatar';
import { ThemeProvider } from '../../utils/ThemeProvider';
import { AvatarBadge } from '../../components/avatar/AvatarBadge';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Avatars',
  component: Avatars,
  argTypes: {},
} as ComponentMeta<typeof Avatars>;

const Template: ComponentStory<typeof Avatars> = (args) => (
  <ThemeProvider>
    <Avatars {...args} />
  </ThemeProvider>
);

export const Avatar = Template.bind({});

Avatar.args = {
  src: '../../utils/Assets/Image.png',
  size: 'normal',
  variant: 'rounded',
};
