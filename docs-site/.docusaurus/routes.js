import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/react-native-mazic-ui/search',
    component: ComponentCreator('/react-native-mazic-ui/search', '4f9'),
    exact: true
  },
  {
    path: '/react-native-mazic-ui/docs',
    component: ComponentCreator('/react-native-mazic-ui/docs', '498'),
    routes: [
      {
        path: '/react-native-mazic-ui/docs/0.2.0',
        component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0', '547'),
        routes: [
          {
            path: '/react-native-mazic-ui/docs/0.2.0',
            component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0', 'bbe'),
            routes: [
              {
                path: '/react-native-mazic-ui/docs/0.2.0/components/button',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/components/button', '682'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/components/card',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/components/card', '2be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/components/error-boundary',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/components/error-boundary', '061'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/components/text',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/components/text', 'e33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/components/theme',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/components/theme', 'c27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/installation',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/installation', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/0.2.0/intro',
                component: ComponentCreator('/react-native-mazic-ui/docs/0.2.0/intro', '7ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/react-native-mazic-ui/docs',
        component: ComponentCreator('/react-native-mazic-ui/docs', '7e9'),
        routes: [
          {
            path: '/react-native-mazic-ui/docs',
            component: ComponentCreator('/react-native-mazic-ui/docs', '87f'),
            routes: [
              {
                path: '/react-native-mazic-ui/docs/components/button',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/button', '516'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/card',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/card', 'd24'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/error-boundary',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/error-boundary', 'a63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/liquid-glass-button',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/liquid-glass-button', '5af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/text',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/text', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/theme',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/theme', 'aa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/installation',
                component: ComponentCreator('/react-native-mazic-ui/docs/installation', '334'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/intro',
                component: ComponentCreator('/react-native-mazic-ui/docs/intro', 'ea4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/react-native-mazic-ui/',
    component: ComponentCreator('/react-native-mazic-ui/', 'b94'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
