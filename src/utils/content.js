export function makeUrl(article, POST_SOURCE) {
  return `admin${article.dir.split(POST_SOURCE).join('')}/${article.base.split('.json').join('')}`
}

export function filterPosts(summaryJson, POST_SOURCE) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    .filter((file) => file.indexOf(POST_SOURCE) === 0)
    .map(file => summaryJson.fileMap[file])
    .map(post => Object.assign({}, post, {href: makeUrl(post, POST_SOURCE)}))
    .sort((a, b) => {
      const aDate = Date.parse(a.date)
      const bDate = Date.parse(b.date)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
}

export function filterCards(summaryJson, POST_SOURCE) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    .filter((file) => file.indexOf(POST_SOURCE) === 0)
    .map(file => summaryJson.fileMap[file])
    .map(card => Object.assign({}, card, { href: card.website, fb: card.facebook, ig: card.instagram }))
    .sort((a, b) => a.acronyme.localeCompare(b.acronyme));
}

export function filterYears(POST_SOURCE) {
  const fs = require('fs');
  const yearsDirectory = fs.readdirSync(POST_SOURCE, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((a, b) => {
      const aDate = Date.parse(a.date)
      const bDate = Date.parse(b.date)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
  return yearsDirectory;
}
