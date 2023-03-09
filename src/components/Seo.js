import React from "react"
import { Helmet } from "react-helmet-async"
import { useStaticQuery, graphql } from "gatsby"
const Seo = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  return (
    <Helmet>
      <title>
        {defaultTitle} | {title}
      </title>

      <meta name="theme-color" content="#d9534f" />
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="google" content="notranslate" />
      <meta name="referrer" content="no-referrer" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-dns-prefetch-control" content="off" />
      <meta property="og:url" content="https://mcjabko.cz" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="MCJabko.cz" />
      <meta property="og:image" content="https://mcjabko.cz/android-chrome-512x512.png" />
      <meta property="og:image:alt" content="Logo serveru MCJabko" />
      <meta property="og:description" content="MCJabko je síť Semi-Vanilla a Vanilla serverů již od roku 2017."/>
      <meta property="og:site_name" content="MCJabko.cz" />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="article:author" content="Rispy_CZ" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon-16x16.png"
      />
      <link rel="manifest" href="site.webmanifest" />
    </Helmet>
  )
}
export default Seo
