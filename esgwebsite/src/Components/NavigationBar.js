import React from 'react'
import { Tab } from 'semantic-ui-react'


const panes = [
  { menuItem: 'About', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Events', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Contact', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Student Resources', render: () => <Tab.Pane>Tab 4 Content</Tab.Pane> },
  { menuItem: 'Partner with Pratt', render: () => <Tab.Pane>Tab 5 Content</Tab.Pane> },
]

const NavigationBar = () => <Tab panes={panes} />

export default NavigationBar
