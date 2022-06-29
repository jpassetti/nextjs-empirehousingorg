const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}
export async function getHomepageData() {
	const data = await fetchAPI(`
    query HomepageQuery {
        page(id: "home", idType: URI) {
          id
          title
          content
        }
      }
	`)
	return data?.page
}
export async function getAllPageSlugs() {
	const data = await fetchAPI(`
    query GetAllPageSlugs {
		pages {
		  edges {
			node {
			  id
			  slug
			}
		  }
		}
	  }
	`)
	return data?.pages
}
export async function getPageBySlug(id) {
	const data = await fetchAPI(`
	query GetPageBySlug($id: ID!) {
		page(id: $id, idType: URI) {
		  id
		  title
		  content
		}
	  }`, {
		variables: {
			"id": id
		}
	})
	return data?.page

}
