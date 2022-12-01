import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmptyState } from '../../components/EmptyState';
import { ThemeProvider } from '../../utils/ThemeProvider';
import { Buttons } from '../../components/Button';

export default {
  title: 'Example/EmptyState',
  component: EmptyState,
  argTypes: {},
  subcomponents: { Buttons },
} as ComponentMeta<typeof EmptyState>;

const Template: ComponentStory<typeof EmptyState> = (args) => (
  <ThemeProvider>
    <EmptyState {...args} />
  </ThemeProvider>
);

export const EmptyStateStory = Template.bind({});
EmptyStateStory.args = {
  isLoading: true,
  header: 'Collect your important files',
  description:
    'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It also called placeholder (or filler) text. It a convenient tool for mock-ups.',
  imageUrl: '../../utils/Assets/CodeInspect.png',
  primaryAction: (
    <Buttons appearance='primary' isLoading={true}>
      Create repository
    </Buttons>
  ),
  secondaryAction: <Buttons appearance='default'>Import repository</Buttons>,
  tertiaryAction: <Buttons appearance='link'>Learn how</Buttons>,
  maxImageHeight: 160,
  maxImageWidth: 160,
  Hwidth: 'wide',
};
