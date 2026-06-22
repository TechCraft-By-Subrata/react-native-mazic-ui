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
    component: ComponentCreator('/react-native-mazic-ui/docs', '350'),
    routes: [
      {
        path: '/react-native-mazic-ui/docs/next',
        component: ComponentCreator('/react-native-mazic-ui/docs/next', '12d'),
        routes: [
          {
            path: '/react-native-mazic-ui/docs/next',
            component: ComponentCreator('/react-native-mazic-ui/docs/next', '033'),
            routes: [
              {
                path: '/react-native-mazic-ui/docs/next/components/button',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/components/button', 'f2a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/components/card',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/components/card', 'db1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/components/error-boundary',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/components/error-boundary', 'fb8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/components/text',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/components/text', 'a02'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/components/theme',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/components/theme', '522'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/installation',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/installation', '047'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/next/intro',
                component: ComponentCreator('/react-native-mazic-ui/docs/next/intro', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/react-native-mazic-ui/docs',
        component: ComponentCreator('/react-native-mazic-ui/docs', '4ea'),
        routes: [
          {
            path: '/react-native-mazic-ui/docs',
            component: ComponentCreator('/react-native-mazic-ui/docs', 'b8f'),
            routes: [
              {
                path: '/react-native-mazic-ui/docs/components/button',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/button', '380'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/card',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/card', '336'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/error-boundary',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/error-boundary', '130'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/text',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/text', 'a74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/components/theme',
                component: ComponentCreator('/react-native-mazic-ui/docs/components/theme', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/installation',
                component: ComponentCreator('/react-native-mazic-ui/docs/installation', 'ea3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/react-native-mazic-ui/docs/intro',
                component: ComponentCreator('/react-native-mazic-ui/docs/intro', '875'),
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
