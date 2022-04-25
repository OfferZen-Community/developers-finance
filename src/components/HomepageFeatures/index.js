import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Maintained by the OfferZen and the developer community',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Developer Finance Guide is an open source guide that contains carefully curated content to help you navigate the world of personal finance. 
      </>
    ),
  },
  {
    title: 'In partnership with Investec, and the OfferZen developer community',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In-depth insights from financial experts from Investec. We've worked closely with members of the OfferZen developer community to develop the framework for this guide and ensure that the content is valuable and useful. 
      </>
    ),
  },
  {
    title: 'Built for devs, by devs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Use this guide in your personal capacity and help develop it for others.
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
