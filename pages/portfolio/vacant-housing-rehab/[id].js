import Head from 'next/head'
import Link from 'next/link'

import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Layout from '../../../components/Layout'
import MainContent from "../../../components/MainContent"
import ShowcaseImage from '../../../components/ShowcaseImage'

import { getAllPageSlugs, getPageBySlug, getMainMenuItems, getAllProjectSlugs, getProjectBySlug } from '../../../lib/api'

export async function getStaticPaths() {

	const projects = await getAllProjectSlugs();

	const paths = projects.map(edge => {
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

	const pageData = await getProjectBySlug(params.id);
	const menuItems = await getMainMenuItems();

	return {
		props: {
			pageData, menuItems
		}
	}

}

const BasicPageTemplate = ({pageData, menuItems}) => {
    const { title, content, featuredImage } = pageData;
    return <Layout menuItems={menuItems}>
		<Head>
			<title>{title} | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h5" marginBottom="4"><Link href="/portfolio" ><a style={{ "color" : "red"}}>&laquo; Back to portfolio</a></Link></Heading>
        <Heading name="h3" marginBottom="1" caps>Vacant Housing Rehab</Heading>
            <Heading name="h1">{title}</Heading>
            {featuredImage &&
                <ShowcaseImage 
                    src={featuredImage.node.sourceUrl}
                    alt={featuredImage.node.altText}
                    width={featuredImage.node.mediaDetails.width}
                    height={featuredImage.node.mediaDetails.height}
                />
            }    
            {content &&
                    <MainContent content={content} />
            }
		</Container>
    </Layout>
}
export default BasicPageTemplate;