import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card2 from './Card2';

const meta = {
  title: 'UI/Card2',
  component: Card2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card2>;

export default meta;
type Story = StoryObj<typeof Card2>;

export const Default: Story = {
  args: {
    item: {
      id: "card-1",
      title: "Getting Started with Component Libraries",
      summary: "Learn how to quickly integrate and customize components in your projects. We'll cover installation, theming, and best practices for building modern interfaces.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "https://example.com",
      image: "https://via.placeholder.com/300x200.png?text=Card+Image",
    },
  },
};

export const WithoutMetadata: Story = {
  args: {
    item: {
      id: "card-2",
      title: "Building Responsive Web Applications",
      summary: "Explore how to create responsive web experiences using modern UI components. Discover practical tips for implementing different screen sizes.",
      url: "https://example.com",
      image: "https://via.placeholder.com/300x200.png?text=Responsive+Design",
    },
  },
};

export const LongContent: Story = {
  args: {
    item: {
      id: "card-3",
      title: "Advanced Design Systems with Modern CSS",
      summary: "Dive into creating scalable design systems using modern CSS techniques. Learn how to maintain consistency while building flexible and maintainable component libraries. This summary is intentionally longer to demonstrate how the card handles more content.",
      label: "Advanced",
      author: "Emma Thompson",
      published: "15 Feb 2024",
      url: "https://example.com",
      image: "https://via.placeholder.com/300x200.png?text=Design+Systems",
    },
  },
};
