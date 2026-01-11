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
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>コードを見れば最終的なExcelの構造がわかる</p>
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
    title: "宣言的API",
    description: (
      <>
        最終的なExcelの構造がわかりやすい形で書けます。 命令的なAPIではなく、宣言的なAPIでコードの見通しが良くなります。
      </>
    ),
  },
  {
    title: "TypeScript完全対応",
    description: <>型補完が効いて書きやすく、型安全なコードを書けます。 開発体験を重視した設計になっています。</>,
  },
  {
    title: "メソッドチェーン型",
    description: <>流れるようにExcelを構築できます。 シンプルで直感的なAPIで、すぐに使い始められます。</>,
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
          クイックスタート
        </Heading>
        <div className="row">
          <div className="col">
            <pre className={styles.codeBlock}>
              <code>{`import { xlkit } from "xlkit";

const salesData = [
  { name: "りんご", price: 100, quantity: 50 },
  { name: "みかん", price: 80, quantity: 100 },
  { name: "バナナ", price: 120, quantity: 30 },
];

const output = await xlkit()
  .sheet("売上")
  .table({
    preset: "basic",
    columns: [
      { key: "name", label: "商品名" },
      { key: "price", label: "価格" },
      { key: "quantity", label: "数量" },
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
            インストールして始める
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title} - ${siteConfig.tagline}`} description="xlkit - 宣言的なExcel生成ライブラリ">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CodeExample />
      </main>
    </Layout>
  );
}
