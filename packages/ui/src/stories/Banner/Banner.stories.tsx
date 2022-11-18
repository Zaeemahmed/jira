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
BannerStory.args = {
  appearance: 'announcement',
  children: (
    <div>
      {' '}
      Bitbucket is experiencing an incident, but we’re on it. Check our status
      page for more details.{' '}
      <a href='/components/banner/examples'>Learn more</a>
    </div>
  ),
  icon: (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='24' height='24' fill='white' fill-opacity='0.01' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M11.062 4.967C11.578 3.993 12.42 3.989 12.938 4.967L20.062 18.425C20.578 19.399 20.107 20.196 19.005 20.196H4.99501C3.89301 20.196 3.42001 19.403 3.93801 18.425L11.062 4.967ZM11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15C12.2652 15 12.5196 14.8946 12.7071 14.7071C12.8947 14.5196 13 14.2652 13 14V9C13 8.73478 12.8947 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V14C11 14.2652 11.1054 14.5196 11.2929 14.7071ZM11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8947 17.5196 13 17.2652 13 17C13 16.7348 12.8947 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16C11.7348 16 11.4804 16.1054 11.2929 16.2929C11.1054 16.4804 11 16.7348 11 17C11 17.2652 11.1054 17.5196 11.2929 17.7071Z'
        fill='#253858'
      />
    </svg>
  ),
};
