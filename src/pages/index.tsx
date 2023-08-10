import { Link, type PageProps } from 'gatsby'
import React from 'react'

// import SEO from '../components/seo'
import MainLayout from '../layout'
import styled from '@emotion/styled'

const ImprintLink = styled(Link)`
  position: absolute;
  bottom: 10vh;
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 16vw;
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
    margin: 1.2rem 0;
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

        <ImprintLink to="/imprint">Imprint</ImprintLink>
      </Hero>
    </MainLayout>
  )
}

export default IndexPage

// export const Head: HeadFC = () => <SEO />
