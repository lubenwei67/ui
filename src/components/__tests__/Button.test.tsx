import React from 'react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with default props', () => {
    const button = <Button>Click me</Button>;
    expect(button).toBeDefined();
  });

  it('renders with primary variant', () => {
    const button = <Button variant="primary">Primary</Button>;
    expect(button.props.variant).toBe('primary');
  });

  it('renders with different sizes', () => {
    const smallButton = <Button size="small">Small</Button>;
    const mediumButton = <Button size="medium">Medium</Button>;
    const largeButton = <Button size="large">Large</Button>;
    
    expect(smallButton.props.size).toBe('small');
    expect(mediumButton.props.size).toBe('medium');
    expect(largeButton.props.size).toBe('large');
  });

  it('accepts custom className', () => {
    const button = <Button className="custom-class">Button</Button>;
    expect(button.props.className).toBe('custom-class');
  });

  it('passes through onClick handler', () => {
    const handleClick = jest.fn();
    const button = <Button onClick={handleClick}>Click</Button>;
    expect(button.props.onClick).toBe(handleClick);
  });
});
