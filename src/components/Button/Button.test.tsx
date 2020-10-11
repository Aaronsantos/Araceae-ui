import React from 'react';
import { renderWithProviders } from '../../__mocks__/utils/RenderWithProviders';
import Button from '.';

describe('Button Component', () => {
  it('Should render default color button', () => {
    const { container } = renderWithProviders(<Button>test</Button>);
    expect(container).toBeVisible();
  });
});
