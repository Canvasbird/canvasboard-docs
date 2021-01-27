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
          <div className={styles.text}>A board with Interactive Plugins to meet all your needs 🌏</div>
          <div className={styles.smallText}>Canvasboard is an Interactive board with plugins focusing on replacing the need of multiple platforms for teaching, presenting, managing or explaining your ideas</div>
          <div className={styles.buttons}>
            <Link id ="myButton" className={clsx('button button button--secondary button--lg',styles.getStarted)}
            to={useBaseUrl('docs/introduction/what-is-canvasboard')}> Explore Docs </Link>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
