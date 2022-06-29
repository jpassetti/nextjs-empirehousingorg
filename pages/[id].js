import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MainContent from "../components/MainContent"

import { getAllPageSlugs, getPageBySlug } from '../lib/api'

export async function getStaticPaths() {

	const pages = await getAllPageSlugs()

	const paths = pages.edges.map(edge => {
		const { slug } = edge.node
		return {
			params: {
				id: slug,
			}
		}
	})
	return {
		paths,
		fallback: false,
	}
}
export async function getStaticProps({ params }) {

	const pageData = await getPageBySlug(params.id)
	return {
		props: {
			pageData,
		}
	}

}

const BasicPageTemplate = ({pageData}) => {
    const { title, content } = pageData;
    return <Layout>
		<Container>
        <Heading name="h1">{title}</Heading>
        <MainContent content={content} />
		</Container>
    </Layout>
}
export default BasicPageTemplate;