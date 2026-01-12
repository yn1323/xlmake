import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import { useState } from "react";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContent)}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>コードを見れば最終的なExcelの構造がわかる</p>
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
    title: "宣言的API",
    description:
      "最終的なExcelの構造がわかりやすい形で書けます。命令的なAPIではなく、宣言的なAPIでコードの見通しが良くなります。",
  },
  {
    cellAddress: "B1",
    icon: "📝",
    title: "TypeScript完全対応",
    description: "型補完が効いて書きやすく、型安全なコードを書けます。開発体験を重視した設計になっています。",
  },
  {
    cellAddress: "C1",
    icon: "🔗",
    title: "メソッドチェーン型",
    description: "流れるようにExcelを構築できます。シンプルで直感的なAPIで、すぐに使い始められます。",
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
  { name: "りんご", price: 100, quantity: 50 },
  { name: "みかん", price: 80, quantity: 100 },
  { name: "バナナ", price: 120, quantity: 30 },
];

function DownloadButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const { xlkit } = await import("xlkit");
      const browserOutput = await xlkit()
        .sheet("売上")
        .text({ value: "xlkit サンプル", style: { bold: true, fontSize: 16 } })
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
            { key: "name", label: "商品名" },
            { key: "price", label: "価格" },
            { key: "quantity", label: "数量" },
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
      {isLoading ? "生成中..." : "ダウンロード"}
    </button>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeExample}>
      <div className={styles.codeExampleContainer}>
        <Heading as="h2" className={styles.codeExampleTitle}>
          クイックスタート
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
                <span className={styles.codeString}>"売上"</span>){"\n"}
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
                <span className={styles.codeString}>"商品名"</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>key</span>:{" "}
                <span className={styles.codeString}>"price"</span>, <span className={styles.codeProperty}>label</span>:{" "}
                <span className={styles.codeString}>"価格"</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>key</span>:{" "}
                <span className={styles.codeString}>"quantity"</span>,{" "}
                <span className={styles.codeProperty}>label</span>: <span className={styles.codeString}>"数量"</span>{" "}
                {"}"}
                {"\n"}
                {"    "}],{"\n"}
                {"    "}
                <span className={styles.codeProperty}>data</span>: [{"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"りんご"</span>, <span className={styles.codeProperty}>price</span>:{" "}
                <span className={styles.codeNumber}>100</span>, <span className={styles.codeProperty}>quantity</span>:{" "}
                <span className={styles.codeNumber}>50</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"みかん"</span>, <span className={styles.codeProperty}>price</span>:{" "}
                <span className={styles.codeNumber}>80</span>, <span className={styles.codeProperty}>quantity</span>:{" "}
                <span className={styles.codeNumber}>100</span> {"},"}
                {"\n"}
                {"      "}
                {"{"} <span className={styles.codeProperty}>name</span>:{" "}
                <span className={styles.codeString}>"バナナ"</span>, <span className={styles.codeProperty}>price</span>:{" "}
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
                  <th>商品名</th>
                  <th>価格</th>
                  <th>数量</th>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>2</td>
                  <td>りんご</td>
                  <td>100</td>
                  <td>50</td>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>3</td>
                  <td>みかん</td>
                  <td>80</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td className={styles.excelRowHeader}>4</td>
                  <td>バナナ</td>
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
