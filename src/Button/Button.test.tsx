import React from 'react';
import TestRenderer from 'react-test-renderer';

import { withThemeProvider } from '../__mocks__/utils/RenderWithProviders';
import Button from '.';
import defaultTheme from '../Theme/theme';

describe('Button Component', () => {
  it('Should render default color button', () => {
    const tree = TestRenderer.create(
      withThemeProvider(<Button>test</Button>)
    ).toJSON();
    expect(tree).toHaveStyleRule('color', defaultTheme.colors.white);
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.black);
    expect(tree).toHaveStyleRule('border', 'solid');
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.black);

    expect(tree).toHaveStyleRule('color', defaultTheme.colors.black, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.white, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.black, {
      modifier: ':hover',
    });
  });

  it('Should render outlined (white) color button', () => {
    const tree = TestRenderer.create(
      withThemeProvider(<Button color="white">test</Button>)
    ).toJSON();
    expect(tree).toHaveStyleRule('color', defaultTheme.colors.black);
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.white);
    expect(tree).toHaveStyleRule('border', 'solid');
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.black);

    expect(tree).toHaveStyleRule('color', defaultTheme.colors.white, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.black, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.black, {
      modifier: ':hover',
    });
  });

  it('Should render primary brand color button', () => {
    const tree = TestRenderer.create(
      withThemeProvider(<Button color="brand">test</Button>)
    ).toJSON();
    expect(tree).toHaveStyleRule('color', defaultTheme.colors.white);
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.brand);
    expect(tree).toHaveStyleRule('border', 'solid');
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.brand);

    expect(tree).toHaveStyleRule('color', defaultTheme.colors.white, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('background', defaultTheme.colors.black, {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('border-color', defaultTheme.colors.black, {
      modifier: ':hover',
    });
  });

  it('Should render default color wide button', () => {
    const tree = TestRenderer.create(
      withThemeProvider(<Button wide>test</Button>)
    ).toJSON();
    expect(tree).toHaveStyleRule('width', '100%');
  });
});
