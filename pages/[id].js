import Head from 'next/head'

import Container from '../components/Container'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import MainContent from "../components/MainContent"

import { getAllPageSlugs, getPageBySlug, getMainMenuItems } from '../lib/api'

export async function getStaticPaths() {

	const pages = await getAllPageSlugs();

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

	const pageData = await getPageBySlug(params.id);
	const menuItems = await getMainMenuItems();

	return {
		props: {
			pageData, menuItems
		}
	}

}

const BasicPageTemplate = ({pageData, menuItems}) => {
    const { title, content } = pageData;
    return <Layout menuItems={menuItems}>
		<Head>
			<title>{title} | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h1">{title}</Heading>
        <MainContent content={content} />
		</Container>
    </Layout>
}
export default BasicPageTemplate;