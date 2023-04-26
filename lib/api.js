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
		  slug
		}
	  }`, {
		variables: {
			"id": id
		}
	})
	return data?.page
}
export async function getMainMenuItems() {
	const data = await fetchAPI(`
	query GetMainMenuItems($id: ID!) {
		menu(id: $id, idType: LOCATION) {
		  id
		  menuItems {
			edges {
			  node {
				id
				label
				path
			  }
			}
		  }
		}
	  }`, {
		variables: {
			"id": "main-menu"
		}
	})
	return data?.menu.menuItems.edges
}
export async function getProjectsByType(slug) {
	const data = await fetchAPI(`
	query getProjectsByType($id: ID!) {
		projectType(id: $id, idType: SLUG) {
		  id
		  name
		  constructionProjects {
			edges {
			  node {
				id
				title
				slug
				featuredImage {
				  node {
					altText
					mediaDetails {
					  height
					  width
					}
					sourceUrl(size: MEDIUM)
				  }
				}
			  }
			}
		  }
		}
	  }`, {
		variables: {
			"id": slug
		}
	})
	return data?.projectType.constructionProjects.edges
}
export async function getAllProjectTypes() {
	const data = await fetchAPI(`
	query NewQuery {
		projectTypes {
		  edges {
			node {
			  name
			  slug
			  constructionProjects {
				edges {
				  node {
					id
					title
					slug
					featuredImage {
					  node {
						altText
						mediaDetails {
						  height
						  width
						}
						sourceUrl(size: MEDIUM)
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }`)
	return data?.projectTypes.edges
}
export async function getAllProjectSlugs() {
	const data = await fetchAPI(`
	query GetAllProjectSlugs {
		constructionProjects {
		  edges {
			node {
			  slug
			}
		  }
		}
	  }
	`)
	return data?.constructionProjects.edges
}
export async function getProjectBySlug(slug) {
	const data = await fetchAPI(`
	query GetProjectBySlug($id: ID!) {
		constructionProject(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl(size: LARGE)
			}
		  }
		  projectTypes {
			edges {
			  node {
				name
				slug
			  }
			}
		  }
		}
	  }`, {
		variables: {
			"id": slug
		}
	})
	return data?.constructionProject
}
export async function getStaffTypes() {
 const data = await fetchAPI(`
 query GetAllPageSlugs {
	staffTypes(where: {orderby: TERM_ORDER}) {
	  edges {
		node {
		  name
		  staffMembers(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
			edges {
			  node {
				title
				slug
				personInformation {
				  name {
					firstName
					lastName
				  }
				  position
				}
				featuredImage {
				  node {
					altText
					mediaDetails {
					  height
					  width
					}
					sourceUrl(size: MEDIUM)
				  }
				}
			  }
			}
		  }
		}
	  }
	}
  }`)
return data?.staffTypes.edges
}
export async function getAllConstructionProjects() {
	const data = await fetchAPI(`
	query GetAllConstructionProjects {
		constructionProjects {
			edges {
			  node {
				title
				slug
				featuredImage {
				  node {
					sourceUrl
					altText
					mediaDetails {
					  width
					  height
					}
				  }
				}
				projectTypes {
				  edges {
					node {
					  name
					  slug
					}
				  }
				}
			  }
			}
		  }
	  }
	`)
	return data?.constructionProjects.edges
}