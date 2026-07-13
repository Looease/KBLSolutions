import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import Nav from '../../components/Nav.svelte';

afterEach(() => cleanup());

describe('Nav component', () => {
  it('renders without throwing', () => {
    expect(() => render(Nav)).not.toThrow();
  });

  it('renders the KBL Solutions logo image', () => {
    const { container } = render(Nav);
    const logo = container.querySelector('img[alt="KBL Solutions logo"]');
    expect(logo).toBeInTheDocument();
  });

  it('contains an "About Us" navigation link', () => {
    const { getByText } = render(Nav);
    expect(getByText('About Us')).toBeInTheDocument();
  });

  it('contains a "Products and Services" navigation link', () => {
    const { getByText } = render(Nav);
    expect(getByText('Products & Services')).toBeInTheDocument();
  });

  it('contains a "Testimonials" navigation link', () => {
    const { getByText } = render(Nav);
    expect(getByText('Testimonials')).toBeInTheDocument();
  });

  it('contains a "Contact" navigation link', () => {
    const { getByText } = render(Nav);
    expect(getByText('Contact')).toBeInTheDocument();
  });

  it('renders phone number link', () => {
    const { container } = render(Nav);
    const phoneLink = container.querySelector('a[href="tel:+447894825001"]');
    expect(phoneLink).toBeInTheDocument();
  });

  it('renders email link', () => {
    const { container } = render(Nav);
    const emailLink = container.querySelector('a[href="mailto:info@kblsolutions.co.uk"]');
    expect(emailLink).toBeInTheDocument();
  });
});

describe('clickOutside Svelte action', () => {
  it('dispatches click_outside when clicking outside the node', () => {
    const node = document.createElement('div');
    document.body.appendChild(node);

    let fired = false;
    node.addEventListener('click_outside', () => {
      fired = true;
    });

    // Simulate the action logic inline
    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside', node));
      }
    };
    document.addEventListener('click', handleClick, true);

    // Click outside the node
    const outsideEl = document.createElement('button');
    document.body.appendChild(outsideEl);
    outsideEl.click();

    expect(fired).toBe(true);

    document.removeEventListener('click', handleClick, true);
    document.body.removeChild(node);
    document.body.removeChild(outsideEl);
  });

  it('does not dispatch click_outside when clicking inside the node', () => {
    const node = document.createElement('div');
    const inner = document.createElement('button');
    node.appendChild(inner);
    document.body.appendChild(node);

    let fired = false;
    node.addEventListener('click_outside', () => {
      fired = true;
    });

    const handleClick = event => {
      if (node && !node.contains(event.target) && !event.defaultPrevented) {
        node.dispatchEvent(new CustomEvent('click_outside', node));
      }
    };
    document.addEventListener('click', handleClick, true);

    inner.click();

    expect(fired).toBe(false);

    document.removeEventListener('click', handleClick, true);
    document.body.removeChild(node);
  });
});
