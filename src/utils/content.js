/**
 * @brief Create a website URL for a post, in the form of
 *   "/posts/{hierachy_from_post_source}/{title}".
 */
export function makeUrl(article, POST_SOURCE) {
  return `admin${article.dir.split(POST_SOURCE).join('')}/${article.base.split('.json').join('')}`
}

/**
 * @brief Filter the posts to remove the incorrectly formated and sort them by dates.
 */
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