import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Buttons } from '../../components/Button/';
import { ThemeProvider } from '../../utils/ThemeProvider';

export default {
  title: 'Example/Button',
  component: Buttons,
  argTypes: {},
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <ThemeProvider>
    <Buttons {...args} />
  </ThemeProvider>
);

export const ButtonStory = Template.bind({});
ButtonStory.args = {
  disabled: false,
  appearance: 'danger',
  children: 'Button',
  isLoading: true,
  Icon: (
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
        d='M4 12V19C3.99684 19.13 4.01982 19.2593 4.06758 19.3802C4.11533 19.5011 4.18689 19.6112 4.278 19.704C4.36955 19.7971 4.47862 19.8712 4.59893 19.922C4.71923 19.9728 4.84841 19.9993 4.979 20H6V11H4.98C4.84941 11.0007 4.72023 11.0272 4.59993 11.078C4.47962 11.1288 4.37055 11.2029 4.279 11.296C4.18771 11.3887 4.11597 11.4987 4.06804 11.6197C4.02011 11.7406 3.99698 11.8699 4 12ZM19.281 11.04C18.9939 10.7058 18.6377 10.4379 18.237 10.2547C17.8363 10.0715 17.4006 9.97747 16.96 9.979H14.326C14.366 9.798 14.406 9.619 14.436 9.447C14.951 6.513 14.436 5.447 13.932 4.853C13.7029 4.58461 13.4181 4.36929 13.0974 4.22199C12.7768 4.07469 12.4279 3.99894 12.075 4C11.3314 4.02241 10.621 4.31342 10.0753 4.81917C9.5297 5.32492 9.1857 6.01119 9.107 6.751C8.714 8.59 8.653 8.751 8.139 9.476L7.371 10.565C7.13695 10.8997 7.01034 11.2976 7.008 11.706V17.979C7.009 18.511 7.224 19.02 7.604 19.395C7.984 19.77 8.5 19.98 9.037 19.979H16.284C16.9999 19.9852 17.6946 19.7363 18.2438 19.2769C18.7929 18.8176 19.1606 18.1777 19.281 17.472L19.958 13.472C20.0312 13.0418 20.0085 12.6007 19.8915 12.1803C19.7744 11.7599 19.566 11.3705 19.281 11.04ZM17.283 17.14C17.2423 17.3751 17.1194 17.5881 16.9362 17.741C16.7531 17.8939 16.5216 17.9768 16.283 17.975H9.038V11.706L9.805 10.617C10.5256 9.57461 10.9733 8.36814 11.107 7.108C11.143 6.565 11.362 5.899 12.076 6C12.79 6.1 12.651 7.916 12.439 9.1C12.2235 10.0814 11.9334 11.0449 11.571 11.982L16.961 11.974C17.258 11.973 17.541 12.102 17.734 12.326C17.8291 12.4366 17.8986 12.5668 17.9377 12.7073C17.9767 12.8478 17.9843 12.9952 17.96 13.139L17.284 17.14H17.283Z'
        fill='currentColor'
      />
    </svg>
  ),
  iconBefore: true,
  // href: '/www.google.com',
};