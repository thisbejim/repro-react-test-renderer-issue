import React from 'react';
// import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, Drawer, MenuItem } from 'material-ui';

injectTapEventPlugin();

it('renders without crashing', () => {
  const tree = renderer.create(
    <MuiThemeProvider>
      <Drawer
          docked={false}
          open={true}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    </MuiThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
