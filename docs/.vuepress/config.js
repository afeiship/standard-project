module.exports = {
  base: '/standard-project/',
  title: 'Standard project workflow',
  host: '0.0.0.0',
  description: 'Standard project workflow',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://himg.bdimg.com/sys/portrait/item/be10475f686d6c73db00.jpg'
      }
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        title: 'Initial',
        collapsable: false,
        children: [
          '/initial/001-create-branch.md',
          '/initial/002-master.md',
          '/initial/003-develop.md',
          '/initial/004-feature.md',
          '/initial/005-release.md',
          '/initial/006-hotfix.md',
          '/initial/007-release-vs-tag.md',
        ]
      },
      {
        title: 'Scripts',
        collapsable: false,
        children: [
          '/scripts/001-initial.md',
          '/scripts/002-release.md',
        ]
      }
    ]
  }
};
