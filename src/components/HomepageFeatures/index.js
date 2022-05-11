import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'In partnership with Investec and the OfferZen community',
    Svg: require('@site/static/img/assets/financeguide1.svg').default,
    description: (
      <>
        Get in-depth insights from financial experts at Investec and within the community. 
      </>
    ),
  },
  {
    title: 'Curated by OfferZen and community developers',
    Svg: require('@site/static/img/assets/financeguide2.svg').default,
    description: (
      <>
        This guide contains carefully curated content on personal finance topics submitted to us by developers. Contribute your topic suggestions to ensure the content remains relevant to you. 
      </>
    ),
  },
  {
    title: 'Built for devs, by devs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Use this guide to learn more about personal finance and help to develop it for others by making a contribution.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
