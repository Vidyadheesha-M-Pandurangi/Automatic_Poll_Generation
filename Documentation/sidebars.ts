import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    'get-started',
    'concepts',
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        {
          type: 'category',
          label: 'Frontend',
          items: [
            'frontend/index',
            'frontend/key-features',
            'frontend/folder-structure',
            'frontend/layout-components',
            'frontend/ui-components',
            'frontend/specialized-components',
            
            
          ],
        },
        {
          type: 'category',
          label: 'Backend',
          items: [
            'backend/index',
            'backend/authentication',
            'backend/ai-question-generation',
            'backend/live-quizzes',
            'backend/folder-structure',
          ],
        },
      ],
    },
    'contributing',
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
