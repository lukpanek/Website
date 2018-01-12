/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src="img/anvil.png" />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('docusaurus.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('minecraft-uvod.html', language)}>Minecraft Java</Button>
            <Button href={docUrl('doc1.html', language)}>Bungeecord</Button>
            <Button href={docUrl('doc2.html', language)}>Spigot/Bukkit</Button>
            <Button href={docUrl('doc2.html', language)}>Forge/Sponge</Button>
            <Button href={docUrl('doc2.html', language)}>Minecraft:PE</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block layout="fourColumn">
    {[
      {
        content: 'Na naší wiki najdeš podrobné návody k nejpoužívanějším pluginům, které jsou psané těmi, co tomu opravdu rozumí.',
        image: imgUrl('compass.png'),
        imageAlign: 'top',
        title: 'Návody k pluginům',
      },
      {
        content: 'S každou verzí Minecraftu se určité věci změní. U nás najdeš vše jasně a stručně vypsané, co se v jaké verzi změnilo!',
        image: imgUrl('grass-block.png'),
        imageAlign: 'top',
        title: 'Novinky v Minecraftu',
      },
      {
        content: 'Naše Wiki je Open-Source, co to znamená? No, že se každý může podívat na source a pomoct nám zlepšit naší Wiki!',
        image: imgUrl('Octocat.png'),
        imageAlign: 'top',
        title: 'Open-Source',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (null);

const LearnHow = props => (
  <Block background="light">
    {[
      {
        content: 'Za žádných okolností nechceme konkurovat oficiální Minecraft Wiki. Jen chceme zprostředkovat obsah Minecraftu pro všechny, kteří né tak dobře rozumí angličtině a zároveň poskytnout rady pro servery každého druhu a samozřejmě také hráče.',
        image: imgUrl('slepice.png'),
        imageAlign: 'right',
        title: 'Proč naše wiki?',
      },
    ]}
  </Block>
);

const TryOut = props => (null);

const Description = props => (null);

const Showcase = props => (null);

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
