import styled from 'styled-components';

import Heading from 'components/Form/Heading';
import Nav from 'components/Form/Nav';
import Button from 'components/Form/Button';
import AdditionalResources from 'components/misc/AdditionalResources';
import { StyledCard } from 'components/Form/Card';
import docs, { about, featureIntro,  fairUse } from 'utils/docs';

const AboutContainer = styled.div`
width: 95vw;
max-width: 1000px;
margin: 2rem auto;
padding-bottom: 1rem;
header {
  margin 1rem 0;
  width: auto;
}
section {
  width: auto;
  .inner-heading { display: none; }
}
`;

const HeaderLinkContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  a {
    text-decoration: none;
  }
`;

const Section = styled(StyledCard)`
  margin-bottom: 2rem;
  overflow: clip;
  max-height: 100%;
  section {
    clear: both;
  }
  h3 {
    font-size: 1.5rem;
  }
  hr {
    border: none;
    border-top: 1px dashed blue;
    margin: 1.5rem auto;
  }
  ul {
    padding: 0 0 0 1rem;
    list-style: circle;
  }
  a {
    &:visited { opacity: 0.8; }
  }
  pre {
    background: #f1f6f1;
    border-radius: 4px;
    padding: 0.5rem;
    width: fit-content;
  }
  small { opacity: 0.7; }
  .contents {
    ul {
      list-style: none;
      li {
        a {
          &:visited { opacity: 0.8; }
        }
        b {
          opacity: 0.75;
          display: inline-block;
          width: 1.5rem;
        }
      }
    }
  }
  .example-screenshot {
    float: right; 
    display: inline-flex;
    flex-direction: column;
    clear: both;
    max-width: 300px;
    img {
      float: right;
      break-inside: avoid;
      max-width: 300px;
      // max-height: 30rem;
      border-radius: 6px;
      clear: both;
    }
    figcaption {
      font-size: 0.8rem;
      text-align: center;
      opacity: 0.7;
    }
  }
`;

const makeAnchor = (title: string): string => {
  return title.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "-");
};

const About = (): JSX.Element => {
  return (
    <div>
    <AboutContainer>
      <Nav>
        <HeaderLinkContainer>
          <a href="https://github.com/PhiRequiem/web-check-translation"><Button>Ver en GitHub</Button></a>
        </HeaderLinkContainer>
      </Nav>

      <Heading as="h2" size="medium" >Intro</Heading>
      <Section>
        {about.map((para, index: number) => (
          <p key={index}>{para}</p>
        ))}
        <hr />
      </Section>
      
      <Heading as="h2" size="medium">Características</Heading>
      <Section>
        {featureIntro.map((fi: string, i: number) => (<p key={i}>{fi}</p>))}
        <div className="contents">
        <Heading as="h3" size="small" id="#feature-contents">Contenido</Heading>
          <ul>
            {docs.map((section, index: number) => (
              <li>
                <b>{index + 1}</b>
                <a href={`#${makeAnchor(section.title)}`}>{section.title}</a></li>
            ))}
          </ul>
          <hr />
        </div>
        {docs.map((section, sectionIndex: number) => (
          <section key={section.title}>
            { sectionIndex > 0 && <hr /> }
            <Heading as="h3" size="small" id={makeAnchor(section.title)} >{section.title}</Heading>
            {section.screenshot &&
              <figure className="example-screenshot">
                <img className="screenshot" src={section.screenshot} alt={`Example Screenshot ${section.title}`} />
                <figcaption>Fig.{sectionIndex + 1} - Example of {section.title}</figcaption>
              </figure> 
            }
            {section.description && <>
              <Heading as="h4" size="small">Descripción</Heading>

              <p>{section.description}</p>
            </>}
            { section.use && <>
              <Heading as="h4" size="small">Casos de uso</Heading>
              <p>{section.use}</p>
            </>}
            {section.resources && section.resources.length > 0 && <>
              <Heading as="h4" size="small">Enlaces útiles</Heading>
              <ul>
                {section.resources.map((link: string | { title: string, link: string }, linkIndx: number) => (
                  typeof link === 'string' ? (
                    <li id={`link-${linkIndx}`}><a target="_blank" rel="noreferrer" href={link}>{link}</a></li>
                  ) : (
                    <li id={`link-${linkIndx}`}><a target="_blank" rel="noreferrer" href={link.link}>{link.title}</a></li>
                  )
                ))}
              </ul>
            </>}
          </section>
        ))}
      </Section>

      

      <Heading as="h2" size="medium">Recursos Adicionales</Heading>
      <AdditionalResources />

      

      <Heading as="h2" size="medium" >Términos e Información</Heading>
      <Section>
  <Heading as="h3" size="small" >Uso Responsable</Heading>
  <ul>
    {fairUse.map((para, index: number) => (<li key={index}>{para}</li>))}
  </ul>
  <hr />
  <Heading as="h3" size="small" >Privacidad</Heading>
  <p>
    Se utilizan análisis en la instancia de Netlify. Esto solo registra la URL que visitaste, sin recopilar datos personales.
    También hay un registro básico de errores, que se utiliza únicamente para ayudar a corregir errores.
    <br />
    <br />
    Tu dirección IP, información de navegador/SO/hardware, ni ningún otro dato será recopilado o registrado.
    (Puedes verificarlo tú mismo, ya sea inspeccionando el código fuente o utilizando las herramientas de desarrollo).
  </p>
</Section>

    </AboutContainer>
    </div>
  );
}

export default About;
