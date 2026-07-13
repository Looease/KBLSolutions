import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import Quickquote from '../../components/Quickquote.svelte';

afterEach(() => cleanup());

describe('Quickquote component', () => {
  it('renders without throwing', () => {
    expect(() => render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } })).not.toThrow();
  });

  it('renders the "Request a Quote" heading', () => {
    const { getByText } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    expect(getByText('Request a Quote')).toBeInTheDocument();
  });

  it('renders the form element pointing to Formspree', () => {
    const { container } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    const form = container.querySelector('form');
    expect(form).toBeInTheDocument();
    expect(form.getAttribute('action')).toContain('formspree.io');
    expect(form.getAttribute('method')).toBe('POST');
  });

  it('renders a Quantity input field', () => {
    const { container } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    const quantityInput = container.querySelector('input[name="Quantity"]');
    expect(quantityInput).toBeInTheDocument();
  });

  it('renders a name text input', () => {
    const { container } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    const nameInput = container.querySelector('input[name="name"]');
    expect(nameInput).toBeInTheDocument();
    expect(nameInput.getAttribute('placeholder')).toBe('Full name');
  });

  it('renders an email input', () => {
    const { container } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    const emailInput = container.querySelector('input[type="email"]');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput.getAttribute('placeholder')).toBe('email@company.com');
  });

  it('renders a submit button', () => {
    const { container } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    const submitBtn = container.querySelector('button[type="submit"]');
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.textContent.trim()).toContain('Send Quote Request');
  });

  it('renders "Request price" and "Request more information" checkboxes', () => {
    const { getByText } = render(Quickquote, { props: { productName: 'Test Product', productSize: 'A1' } });
    expect(getByText('Request a price')).toBeInTheDocument();
    expect(getByText('Request more information')).toBeInTheDocument();
  });

  it('pre-fills productName and productSize from props', () => {
    const { container } = render(Quickquote, {
      props: { productName: 'Sentinel Sign', productSize: 'A0' },
    });
    const inputs = container.querySelectorAll('input[type="text"]');
    const values = Array.from(inputs).map(i => i.value);
    expect(values).toContain('Sentinel Sign');
    expect(values).toContain('A0');
  });
});
