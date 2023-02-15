import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Col from '../../components/Col'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import MainContent from "../../components/MainContent"
import Row from "../../components/Row"

import { getPageBySlug, getMainMenuItems, getProjectsByType } from '../../lib/api'


export async function getStaticProps() {

	const pageData = await getPageBySlug("portfolio");
    const newConstructionProjects = await getProjectsByType("new-construction");
    const rehabProjects = await getProjectsByType("vacant-housing-rehab");
	const menuItems = await getMainMenuItems();

	return {
		props: {
			pageData, 
            menuItems,
            newConstructionProjects,
            rehabProjects
		}
	}

}

const BasicPageTemplate = ({
    pageData, 
    menuItems, 
    newConstructionProjects,
    rehabProjects
}) => {
    const { title, content } = pageData;
    return <Layout menuItems={menuItems}>
		<Head>
			<title>{title} | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h1">{title}</Heading>
        <MainContent content={content} />
        <Heading name="h2">New Construction</Heading>
        <Row>
        {newConstructionProjects.map(edge => {
            const { node } = edge;
            return <Col sm="6" md="4">
                {node.featuredImage &&
                 <Link href={`/portfolio/new-construction/${node.slug}`}>
                 <a>
                    <Image 
                        src={node.featuredImage.node.sourceUrl}
                        alt={node.featuredImage.node.altText}
                        width={node.featuredImage.node.mediaDetails.width}
                        height={node.featuredImage.node.mediaDetails.height}
                    />
                    </a></Link>
                }
                <Heading name="h3" marginTop="1"><Link href={`/portfolio/new-construction/${node.slug}`}>
                 <a>{node.title}</a></Link></Heading>
                </Col>
        })} 
        </Row>
        <Heading name="h2">Vacant Housing Rehab</Heading>
        <Row>
        {rehabProjects.map(edge => {
            const { node } = edge;
            return <Col sm="6" md="4">
                {node.featuredImage &&
                    <Link href={`/portfolio/vacant-housing-rehab/${node.slug}`}>
                        <a>
                    <Image 
                        src={node.featuredImage.node.sourceUrl}
                        alt={node.featuredImage.node.altText}
                        width={node.featuredImage.node.mediaDetails.width}
                        height={node.featuredImage.node.mediaDetails.height}
                    />
                    </a>
                    </Link>
                }
                <Heading name="h3" marginTop="1"><Link href={`/portfolio/vacant-housing-rehab/${node.slug}`}>
                        <a>{node.title}</a></Link></Heading>
                </Col>
        })} 
        </Row>
		</Container>
    </Layout>
}
export default BasicPageTemplate;