/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Hlavní</h5>
            <a href={this.docUrl('doc1.html', this.props.language)}>
              Minecraft (verze)
            </a>
            <a href={this.docUrl('doc2.html', this.props.language)}>
              Spigot (plugin návody)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              Bungeecord (plugin návody)
            </a>
          </div>
          <div>
            <h5>O stránce</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              Základní informace
            </a>
            <a href="https://twitter.com/" target="_blank">
              Jak také začít psát
            </a>
          </div>
          <div>
            <h5>Více</h5>
            <a href="https://github.com/MrWakeCZ/Minecraft-help">GitHub Source</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/MrWakeCZ/Minecraft-help/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Dej nám hvězdičku na Githubu">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          Copyright &copy; {currentYear} Minecraft-Help.eu
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
