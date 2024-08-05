const API_URL = process.env.API_URL

async function fetchAPI(query, variables) {
    const headers = { 'Content-Type': 'application/json' }
    if (variables === undefined) {
        variables = {}
    }

    const res = await fetch(API_URL, {
        headers,
        method: 'POST',
        body: JSON.stringify({
            query: query,
            variables: variables,
        }),
        next: {revalidate: 60},
    })

    const json = await res.json()
    return json.data
}

export async function getFirstPostsByNumb(limit) {
    const res = await fetchAPI(`query($limit: Int) {
  posts(pagination: { limit: $limit }) {
    data {
      attributes {
        Title
        Slug
        Description
        categories {
          data {
            attributes {
              Slug
            }
          }
        }
        createdAt
        author {
          data {
            attributes {
              Name
            }
          }
        }
      }
    }
  }
}`,{
        limit
    })
    return res.posts.data;
}

export async function getCategories() {
    const res = await fetchAPI(`query {
  categories {
    data {
      attributes {
        Name
        Slug
      }
    }
  }
}`)
    return res.categories.data;
}

export async function getCategoriesOnlySlug() {
    const res = await fetchAPI(`query {
  categories {
    data {
      attributes {
        Slug

      }
    }
  }
}`)
    return res.categories.data;
}

export async function getSinglePost(slug) {
    const res = await fetchAPI(`query($slug: String) {
  posts(filters: { Slug: { eq: $slug } }) {
    data {
      attributes {
        Title
        Slug
        Content
        Description
        Banner {
          data {
            attributes {
              url
            }
          }
        }
        createdAt
      }
    }
  }
}
`, { "slug": slug})
    return res.posts.data[0].attributes;
}

export async function getPostsSlugs() {
    const res = await fetchAPI(`query {
  posts {
    data {
      attributes {
        Slug
      }
    }
  }
}
`)
    return res.posts.data;
}

export async function getPostsForSitemap() {
    const res = await fetchAPI(`
    query($limit: Int) {
        posts(pagination: { limit: $limit } sort: ["publishedAt"]) {
            data {
                attributes {
                    Slug
                    updatedAt
                }
            }
        }
    }
    `,{ limit: -1 })
    return res.posts.data.reverse();
}

export async function getCategoriesForSitemap() {
    const res = await fetchAPI(`
    query($limit: Int) {
        categories(pagination: { limit: $limit } sort: ["publishedAt"]) {
            data {
                attributes {
                    Slug
                    updatedAt
                }
            }
        }
    }
    `,{ limit: -1 })
    return res.categories.data.reverse();
}

export async function getPostsByCategoryName(categoryName) {
    const res = await fetchAPI(`
    query($categoryName: String) {
      posts(filters: { categories: { Slug: { eq: $categoryName } } } sort: ["publishedAt"]) {
        data {
          attributes {
            Title
            Slug
            Description
            Banner {
                data {
                    attributes {
                        url
                        alternativeText
                    }
                }
            }
          }
        }
      }
    }`, { "categoryName": categoryName })
    res.posts.data.reverse()
    return res.posts.data;
}

export async function getAnasayfaUstKisim(limit) {
    const res = await fetchAPI(`
    query($limit: Int) {
      posts(pagination: { limit: $limit } sort: ["publishedAt"]) {
        data {
          attributes {
            Title
            Slug
            categories {
              data {
                attributes {
                  Name
                }
              }
            }
            Banner {
                data {
                    attributes {
                        url
                        alternativeText
                    }
                }
            }
            author {
              data {
                attributes {
                  Name
                }
              }
            }
          }
        }
      }
    }
`,{
        limit
    })
    res.posts.data.reverse()
    return res.posts.data;
}