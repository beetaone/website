import { Link, type PageProps } from 'gatsby'
import React from 'react'

// import SEO from '../components/seo'
import MainLayout from '../layout'
import styled from '@emotion/styled'

const ImprintLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 5rem;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 5rem);
  padding: 0 16vw 0 16vw;
  gap: 1.2rem;
  background-color: transparent;

  @media (max-width: 768px) {
    height: calc(100vh - 20rem);
    padding: 0 2rem 0 2rem;
    a {
      height: 20rem;
    }
  }
  h1 {
    font-family: Neue-Machina;
    font-size: 6rem;
    font-style: normal;
    font-weight: 900;
  }
  .line {
    width: 90%;
    height: 1px;
    background-color: #1b998b;
  }
  p {
    text-align: center;
    font-family: Garet;
    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
  }
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainLayout>
      <Hero>
        <h1 className="logo">beeta.one</h1>
        <div className="line"></div>
        <p>
          Re-imagine a world where businesses have the power to unlock the limitless possibilities hidden within their
          sensor and machine data.
          <br />
          Stay tuned!
        </p>
      </Hero>

      <ImprintLink to="/imprint">Imprint</ImprintLink>
    </MainLayout>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <SEO />
