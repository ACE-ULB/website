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
    .map(card => Object.assign({}, card, { href: card.website, fb: card.facebook, ig: card.instagram, dc: card.discord, mail: card.email }))
    .sort((a, b) => a.acronyme.localeCompare(b.acronyme));
}

export function filterYears(summaryJson, POST_SOURCE) {
  return summaryJson && summaryJson.fileMap && Object.keys(summaryJson.fileMap)
    .filter((file) => file.indexOf(POST_SOURCE) === 0)
    .map(file => summaryJson.fileMap[file])
    .map((comite) => {
    const { dir, base, ext, sourceBase, sourceExt, ...filtered } = comite;
    return filtered;
    })
    .sort((a, b) => {
      const aDate = Date.parse(a.year)
      const bDate = Date.parse(b.year)
      return (bDate > aDate) ? 1 : (bDate < aDate) ? -1 : 0
    })
}