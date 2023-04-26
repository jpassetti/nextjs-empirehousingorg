import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Container from '../../../components/Container'
import Heading from '../../../components/Heading'
import Layout from '../../../components/Layout'
import MainContent from "../../../components/MainContent"
import ShowcaseImage from '../../../components/ShowcaseImage'

import { getAllPageSlugs, getPageBySlug, getMainMenuItems, getAllProjectSlugs, getProjectBySlug, getAllProjectTypes, getAllConstructionProjects } from '../../../lib/api'

export async function getStaticPaths() {

	const constructionProjects = await getAllConstructionProjects();

	const paths = constructionProjects.map(edge => {
		const { slug, projectTypes } = edge.node;
		return {
			params: {
				projectType: projectTypes.edges[0].node.slug,
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
    const { title, content, featuredImage, projectTypes } = pageData;
    return <Layout menuItems={menuItems}>
		<Head>
			<title>{title} | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h5" marginBottom="4"><Link href="/portfolio" ><a style={{ "color" : "red"}}>&laquo; Back to portfolio</a></Link></Heading>
        <Heading name="h3" marginBottom="1" caps>{projectTypes.edges[0].node.name}</Heading>
            <Heading name="h1" marginTop="1">{title}</Heading>
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