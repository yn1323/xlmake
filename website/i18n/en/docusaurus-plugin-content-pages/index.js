import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">Declarative Excel Generation Library</p>
        <p className={styles.heroDescription}>Code that clearly shows the final Excel structure</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="https://github.com/yn1323/xlkit">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: "Declarative API",
    description: (
      <>
        Write code that clearly shows the final Excel structure. Declarative API over imperative for better code
        readability.
      </>
    ),
  },
  {
    title: "Full TypeScript Support",
    description: <>Type-safe with IntelliSense support. Designed for great developer experience.</>,
  },
  {
    title: "Method Chaining",
    description: <>Fluent Excel construction with method chaining. Simple and intuitive API to get started quickly.</>,
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
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

function CodeExample() {
  return (
    <section className={styles.codeExample}>
      <div className="container">
        <Heading as="h2" className="text--center margin-bottom--lg">
          Quick Start
        </Heading>
        <div className="row">
          <div className="col">
            <pre className={styles.codeBlock}>
              <code>{`import { xlkit } from "xlkit";

const salesData = [
  { name: "Apple", price: 100, quantity: 50 },
  { name: "Orange", price: 80, quantity: 100 },
  { name: "Banana", price: 120, quantity: 30 },
];

const output = await xlkit()
  .sheet("Sales")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "Product" },
      { key: "price", label: "Price" },
      { key: "quantity", label: "Quantity" },
    ],
    data: salesData,
  })
  .getNode();

await output.saveToFile("report.xlsx");`}</code>
            </pre>
          </div>
        </div>
        <div className="text--center margin-top--lg">
          <Link className="button button--primary button--lg" to="/docs/installation">
            Install and Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Declarative Excel Generation Library`}
      description="xlkit - Declarative Excel generation library for TypeScript"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CodeExample />
      </main>
    </Layout>
  );
}
