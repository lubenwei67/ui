import React from 'react';
import { Input } from '../Input';

describe('Input', () => {
  it('renders with default props', () => {
    const input = <Input />;
    expect(input).toBeDefined();
  });

  it('renders with label', () => {
    const input = <Input label="Email" />;
    expect(input.props.label).toBe('Email');
  });

  it('renders with error message', () => {
    const input = <Input error="This field is required" />;
    expect(input.props.error).toBe('This field is required');
  });

  it('renders with helper text', () => {
    const input = <Input helperText="Enter a valid email" />;
    expect(input.props.helperText).toBe('Enter a valid email');
  });

  it('accepts standard input attributes', () => {
    const input = <Input type="email" placeholder="test@example.com" />;
    expect(input.props.type).toBe('email');
    expect(input.props.placeholder).toBe('test@example.com');
  });
});
