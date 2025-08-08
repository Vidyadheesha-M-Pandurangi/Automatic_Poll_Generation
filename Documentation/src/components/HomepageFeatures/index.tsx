import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'AI-Powered Question Generation',
    description: (
      <>
        Leverage AI to automatically generate engaging quiz questions from video, audio, and text-based content.
      </>
    ),
  },
  {
    title: 'Real-time Interactive Quizzes',
    description: (
      <>
        Conduct live, interactive quizzes and polls with real-time feedback and results to keep your audience engaged.
      </>
    ),
  },
  {
    title: 'Comprehensive Content Management',
    description: (
      <>
        Easily upload, process, and manage your multimedia content, with support for rich text editing and media integration.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
