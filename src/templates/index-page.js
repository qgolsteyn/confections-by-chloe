import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PricingMenuItem from "../components/PricingMenu";
import ConfectionItem from "../components/ConfectionItem";

export const IndexPageTemplate = ({
  heading,
  description,
  orderInfo,
  email,
  facebook,
  instagram,
  phone,
  pricing = [],
  orderTitle,
  pricingTitle,
  confectionsTitle,
  confections = [{ category: "none", items: [] }],
}) => {
  const [activeCollection, setActiveCollection] = React.useState(
    confections[0].category
  );

  return (
    <div id="wrapper" className="has-background-white-bis">
      <header
        className="py-6 pattern-cross-dots-lg has-background-primary-light has-text-primary"
        style={{ height: 256 }}
      >
        <div className="container has-text-centered">
          <img src="/img/logo.png" style={{ height: 256 }} alt="logo" />
        </div>
      </header>
      <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary-light"></div>
      <section className="section">
        <div className="container has-text-centered content pt-6 is-smaller">
          <h1 className="title has-text-primary-dark">{heading}</h1>
          <p className="is-size-5">{description}</p>
          <div className="mt-6">
            <a
              className="is-size-4 has-text-primary-dark has-background-primary-light py-1 px-1 mb-4"
              href={`mailto:${email}`}
            >
              💌 {email}
            </a>
          </div>
          <div className="mt-5 ">
            <span className="is-size-4 has-text-primary-dark has-background-primary-light py-1 px-1 mb-4">
              📍 Lethbridge, AB
            </span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered">
          <div className="content is-smaller">
            <h2>{confectionsTitle}</h2>
          </div>
          <div class="tabs is-toggle is-centered py-4">
            <ul>
              {confections.map((item) => (
                <li
                  key={item.category}
                  className={
                    activeCollection === item.category ? "is-active" : ""
                  }
                >
                  <a onClick={() => setActiveCollection(item.category)}>
                    <span>{item.category}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="columns is-multiline is-centered content is-mobile">
            {(
              confections.find((item) => item.category === activeCollection)
                .items || []
            ).map((item) => (
              <ConfectionItem item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered content">
          <h2>{pricingTitle}</h2>
          <div class="columns is-multiline is-centered">
            {pricing.map((item) => (
              <PricingMenuItem
                key={item.category}
                category={item.category}
                items={item.items}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container has-text-centered content pb-6 is-smaller">
          <h2>{orderTitle}</h2>
          <p>{orderInfo}</p>
          <p>
            {email && (
              <div className="mt-6">
                <a
                  className="is-size-4 has-text-primary-dark has-background-primary-light py-1 px-1 mb-4"
                  href={`mailto:${email}`}
                >
                  💌 {email}
                </a>
              </div>
            )}
          </p>
        </div>
      </section>
      <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary"></div>
      <footer className="footer">
        <div className="container has-text-centered">
          <div className="py-4">
            {facebook && (
              <a
                href={facebook}
                class="fa fa-facebook has-text-black"
                rel="me"
              ></a>
            )}
            {instagram && (
              <a
                href={instagram}
                class="fa fa-instagram has-text-black"
                rel="me"
              ></a>
            )}
          </div>
          <img
            src="/img/signature.png"
            style={{ height: 64 }}
            alt="signature"
          />
        </div>
      </footer>
    </div>
  );
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        description
        orderInfo
        email
        facebook
        instagram
        phone
        orderTitle
        pricingTitle
        confectionsTitle
        pricing {
          category
          items {
            name
            price
          }
        }
        confections {
          category
          items {
            name
            description
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
