import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <div className={styles.background}>
      <Layout noFooter title={`${siteConfig.title} Docs`}>
        <div className={styles.bottomLeft}>
          <div className={styles.text}>Discovering and enacting<br/>the path to safe artificial general intelligence.</div>
          <div className={styles.smallText}>Our first-of-its-kind API can be applied to any language task, and currently serves millions of production requests each day.</div>
          <div className={styles.buttons}>
            <Link id ="myButton" className={clsx('button button button--secondary button--lg',styles.getStarted)}
            to={useBaseUrl('docs/introduction/what-is-canvasboard')}> Get Started </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
