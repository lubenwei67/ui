import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders with children', () => {
    const card = <Card>Content</Card>;
    expect(card.props.children).toBe('Content');
  });

  it('renders with title', () => {
    const card = <Card title="Card Title">Content</Card>;
    expect(card.props.title).toBe('Card Title');
  });

  it('renders with footer', () => {
    const footer = <div>Footer</div>;
    const card = <Card footer={footer}>Content</Card>;
    expect(card.props.footer).toEqual(footer);
  });

  it('accepts custom className', () => {
    const card = <Card className="custom-card">Content</Card>;
    expect(card.props.className).toBe('custom-card');
  });
});
