import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

// プロジェクトの設定に合わせて適切なメタデータ形式を使用
const meta = {
    title: 'UI/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

// 基本的なカード
export const Default: Story = {
    args: {
        cardTitle: 'サンプルカード',
        lastUpdateDate: '2023-04-01',
        lastUpdateUser: '山田太郎',
        loginUserNames: [
            { name: '山田太郎', color: 'blue' },
            { name: '佐藤花子', color: 'pink' },
        ],
    },
};

// カスタム画像付きカード
export const WithCustomImage: Story = {
    args: {
        cardImageUrl: 'https://via.placeholder.com/300x200.png?text=Custom+Image',
        cardTitle: 'カスタム画像カード',
        lastUpdateDate: '2023-04-05',
        lastUpdateUser: '鈴木一郎',
        loginUserNames: [
            { name: '鈴木一郎', color: 'green' },
            { name: '高橋和子', color: 'purple' },
            { name: '田中次郎', color: 'orange' },
        ],
    },
};

// 多数のログインユーザーがいるカード
export const WithManyUsers: Story = {
    args: {
        cardTitle: '大規模プロジェクト',
        lastUpdateDate: '2023-04-10',
        lastUpdateUser: '佐藤花子',
        loginUserNames: [
            { name: '山田太郎', color: 'blue' },
            { name: '佐藤花子', color: 'pink' },
            { name: '鈴木一郎', color: 'green' },
            { name: '高橋和子', color: 'purple' },
            { name: '田中次郎', color: 'orange' },
            { name: '伊藤直子', color: 'red' },
            { name: '渡辺浩', color: 'yellow' },
        ],
    },
};

// クリックイベント付きカード
export const WithClickHandler: Story = {
    args: {
        cardTitle: 'クリック可能なカード',
        lastUpdateDate: '2023-04-15',
        lastUpdateUser: '渡辺浩',
        loginUserNames: [{ name: '渡辺浩', color: 'yellow' }],
        onClick: () => alert('カードがクリックされました！'),
    },
};
