import { PageProps, graphql } from 'gatsby'
import React from 'react'
import MainLayout from '../layout'
import styled from '@emotion/styled'

const ImprintContainer = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;

  background-color: transparent;
  @media (max-width: 768px) {
    align-items: flex-start;
  }

  div {
    margin: 2rem auto;
    width: min(90vw, 36rem);
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    h1 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    p {
      margin: 2rem 0;
    }
  }
`

export default function About({ data }: PageProps<Queries.Query>) {
  const pp = data.allMarkdownRemark.nodes as any[]
  const imprintContent = pp[0]
  if (!imprintContent || !imprintContent.html) return <div>404</div>

  return (
    <MainLayout>
      <ImprintContainer>
        <div dangerouslySetInnerHTML={{ __html: imprintContent.html }} />
      </ImprintContainer>
    </MainLayout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { kind: { eq: "imprint" } } }) {
      nodes {
        frontmatter {
          title

          description
        }
        html
      }
    }
  }
`
