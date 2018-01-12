/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Minecraft Help' /* title for your website */,
  tagline: 'Česká stránka obsahující návody pro Minecraft a Spigot pluginy.',
  url: 'https://testing.waked.cz' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  organizationName: 'MrWakeCZ',
  projectName: 'Minecraft-help',
  cname: 'testing.waked.cz',
  noIndex: false,
  editUrl: "https://github.com/MrWakeCZ/Minecraft-help/blob/master/docs/",
  headerLinks: [
    {doc: '', label: 'Domů'},
    {doc: '', label: 'Source'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/anvil.png',
  footerIcon: 'img/anvil.png',
  favicon: 'img/anvil.png',
  /* colors for website */
  colors: {
    primaryColor: '#473C8B',
    secondaryColor: '#6959CD',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
