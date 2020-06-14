import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import PricingMenuItem from "../components/PricingMenu";

export const IndexPageTemplate = ({ intro, pricing }) => (
  <div className="has-background-white-bis">
    <header
      className="py-6 pattern-cross-dots-lg has-background-primary-light has-text-primary"
      style={{ height: 256 }}
    >
      <div className="container has-text-centered">
        <img src="/img/logo.png" style={{ height: 256 }} />
      </div>
    </header>
    <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary-light"></div>
    <section className="section">
      <div className="container has-text-centered content pt-6">
        <h1>{intro.heading}</h1>
        <p>{intro.description}</p>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered content">
        <h2>Price List</h2>
        <div class="columns is-multiline">
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
      <div className="container has-text-centered content">
        <div className="tile is-ancestor is-vertical">
          <div className="tile is-parent my-2">
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
          </div>
          <div className="tile is-parent my-2">
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
            <div className="tile is-child">
              <div className="has-background-primary mx-4 py-6 "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered content pb-6">
        <h2>Make an order!</h2>
        <h3>
          <a className="has-text-primary-dark">qgolsteyn@gmail.com</a>
        </h3>
      </div>
    </section>
    <div class="pattern-diagonal-stripes-sm pt-5 has-text-primary"></div>
    <footer className="footer">
      <div className="container has-text-centered">
        <img src="/img/signature.png" style={{ height: 64 }} />
      </div>
    </footer>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        intro={frontmatter.intro}
        pricing={frontmatter.pricing}
      />
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
        intro {
          heading
          description
        }
        pricing {
          category
          items {
            name
            price
          }
        }
      }
    }
  }
`;
