import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "./Layout"
import Seo from "./Seo"
import * as styles from "../styles/page.module.css"

export default function Page({ pageContext }) {
  const { page } = pageContext
  const { Header, Subtitle, Content } = page
  return (
    <Layout>
      <Seo lang="cs" title={page.Header} />
      <div className={styles.top}>
        <h1>{Header}</h1>
        <h2>{Subtitle}</h2>
      </div>
      <div className={styles.content_wrapper}>
        <ReactMarkdown>{Content}</ReactMarkdown>
      </div>
    </Layout>
  )
}
