import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "@site/src/pages/index.module.css";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { useState } from "react";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContent)}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>Declarative Excel Generation Library</p>
        <p className={styles.heroDescription}>Code that clearly shows the final Excel structure</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="https://github.com/yn1323/xlkit">
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    cellAddress: "A1",
    icon: "📊",
    title: "Declarative API",
    description:
      "Write code that clearly shows the final Excel structure. Declarative API over imperative for better code readability.",
  },
  {
    cellAddress: "B1",
    icon: "📝",
    title: "Full TypeScript Support",
    description: "Type-safe with IntelliSense support. Designed for great developer experience.",
  },
  {
    cellAddress: "C1",
    icon: "🔗",
    title: "Method Chaining",
    description: "Fluent Excel construction with method chaining. Simple and intuitive API to get started quickly.",
  },
];

function Feature({ cellAddress, icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <span className={styles.cellAddress}>{cellAddress}</span>
      <span className={styles.featureIcon}>{icon}</span>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sample data for demo
const salesData = [
  { name: "Apple", price: 100, quantity: 50 },
  { name: "Orange", price: 80, quantity: 100 },
  { name: "Banana", price: 120, quantity: 30 },
];

function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const { xlkit } = await import("xlkit");
      const browserOutput = await xlkit()
        .sheet("Sales")
        .text({ value: "xlkit Sample", style: { bold: true, fontSize: 16 } })
        .space(1)
        .image({
          source: "https://raw.githubusercontent.com/yn1323/xlkit/main/logo.png",
          width: 150,
          height: 150,
        })
        .space(2)
        .table({
          preset: "basic",
          columns: [
            { key: "name", label: "Product" },
            { key: "price", label: "Price" },
            { key: "quantity", label: "Quantity" },
          ],
          data: salesData,
        })
        .getBrowser();

      await browserOutput.download("sample.xlsx");
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button type="button" className={styles.downloadButton} onClick={handleDownload} disabled={isLoading}>
      <svg className={styles.downloadIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
      </svg>
      {isLoading ? "Generating..." : "Download"}
    </button>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeExample}>
      <div className={styles.codeExampleContainer}>
        <Heading as="h2" className={styles.codeExampleTitle}>
          Quick Start
        </Heading>
        <div className={styles.codeExampleContent}>
          {/* Code Window */}
          <div className={styles.codeWindow}>
            <div className={styles.codeWindowHeader}>
              <span className={clsx(styles.windowDot, styles.windowDotRed)} />
              <span className={clsx(styles.windowDot, styles.windowDotYellow)} />
              <span className={clsx(styles.windowDot, styles.windowDotGreen)} />
              <span className={styles.windowTitle}>example.ts</span>
            </div>
            <pre className={styles.codeBlock}>
              <code>
                <span className={styles.codeKeyword}>import</span> {"{ xlkit }"}{" "}
                <span className={styles.codeKeyword}>from</span> <span className={styles.codeString}>"xlkit"</span>;
                {"\n"}
                {"\n"}
                <span className={styles.codeKeyword}>const</span> <span className={styles.codeVariable}>output</span> ={" "}
                <span className={styles.codeKeyword}>await</span> <span className={styles.codeFunction}>xlkit</span>()
                {"\n"}
                {"  "}.<span className={styles.codeFunction}>sheet</span>(
                <span className={styles.codeString}>"Sales"</span>){"\n"}
                {"  "}.<span className={styles.codeFunction}>table</span>({"{"}
                {"\n"}
                {"    "}
                <span className={styles.codeProperty}>preset</span>: <span className={styles.codeString}>"basic"</span>,
                {"\n"}
                {"    "}
                <span className={styles.codeProperty}>columns</span>: [{"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>key</span>:{" "}
                <span className={styles.codeString}>"name"</span>, <span className={styles.codeProperty}>label</span>:{" "}
                <span className={styles.codeString}>"Product"</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>key</span>:{" "}
                <span className={styles.codeString}>"price"</span>, <span className={styles.codeProperty}>label</span>:{" "}
                <span className={styles.codeString}>"Price"</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>key</span>:{" "}
                <span className={styles.codeString}>"quantity"</span>,{" "}
                <span className={styles.codeProperty}>label</span>:{" "}
                <span className={styles.codeString}>"Quantity"</span> {"}"}
                {"\n"}
                {"    "}],{"\n"}
                {"    "}
                <span className={styles.codeProperty}>data</span>: [{"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"Apple"</span>, <span className={styles.codeProperty}>price</span>:{" "}
                <span className={styles.codeNumber}>100</span>, <span className={styles.codeProperty}>quantity</span>:{" "}
                <span className={styles.codeNumber}>50</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"Orange"</span>, <span className={styles.codeProperty}>price</span>:{" "}
                <span className={styles.codeNumber}>80</span>, <span className={styles.codeProperty}>quantity</span>:{" "}
                <span className={styles.codeNumber}>100</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"Banana"</span>, <span className={styles.codeProperty}>price</span>:{" "}
                <span className={styles.codeNumber}>120</span>, <span className={styles.codeProperty}>quantity</span>:{" "}
                <span className={styles.codeNumber}>30</span> {"}"}
                {"\n"}
                {"    "}],{"\n"}
                {"  "}
                {"}"}).getNode();
              </code>
            </pre>
          </div>

          {/* Excel Preview */}
          <div className={styles.excelPreview}>
            <div className={styles.excelPreviewHeader}>
              <svg className={styles.excelIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 9h-2v2H9v-2H7v-2h2V7h2v2h2v2zm0-6V3.5L17.5 8H13z" />
              </svg>
              <span className={styles.excelPreviewTitle}>report.xlsx</span>
              <span className={styles.excelPreviewLabel}>Generated Output</span>
            </div>
            <table className={styles.excelTable}>
              <thead>
                <tr>
                  <th className={styles.excelColHeader}></th>
                  <th className={styles.excelColHeader}>A</th>
                  <th className={styles.excelColHeader}>B</th>
                  <th className={styles.excelColHeader}>C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.excelRowHeader}>1</td>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>2</td>
                  <td>Apple</td>
                  <td>100</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>3</td>
                  <td>Orange</td>
                  <td>80</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>4</td>
                  <td>Banana</td>
                  <td>120</td>
                  <td>30</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.excelPreviewFooter}>
              <BrowserOnly fallback={<span>Loading...</span>}>{() => <DownloadButton />}</BrowserOnly>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection}>
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
