import Head from 'next/head'

import Col from '../components/Col'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Image from 'next/image'
import Layout from '../components/Layout'
import MainContent from "../components/MainContent"
import Paragraph from '../components/Paragraph'
import Row from '../components/Row'
import Section from '../components/Section'

import { getAllPageSlugs, getPageBySlug, getMainMenuItems, getProjectTypes } from '../lib/api'

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
	const projectTypes = await getProjectTypes();

	return {
		props: {
			pageData, menuItems, projectTypes
		}
	}

}

const BasicPageTemplate = ({pageData, menuItems, projectTypes}) => {
    const { title, slug, content } = pageData;
    return <Layout menuItems={menuItems}>
		<Head>
			<title>{title} | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h1">{title}</Heading>
        <MainContent content={content} />
		{slug === "about-us" && projectTypes.map(edge => {
                const {node} = edge;
                const {name, staffMembers} = node;
                return  <Section>
                    <Heading name="h2">{name}</Heading>
                    <Row>
                        {staffMembers.edges.map(edge => {
                            const {node} = edge;
                            const {title, featuredImage, personInformation} = node;
                            const {position} = personInformation;
                            return <Col xs="12" md="6" marginBottom="1">
                                <Row>
                                    
                                {featuredImage &&
                                    <Col xs="4" sm="4"><Image
                                        src={featuredImage.node.sourceUrl}
                                        alt={featuredImage.node.altText}
                                        width={featuredImage.node.mediaDetails.width}
                                        height={featuredImage.node.mediaDetails.height}
                                        layout="responsive"
                                    /></Col>
                                }
                                <Col xs="8" sm="8" flexDirection="column" justifyContent="center">
                                <Heading name="h3" marginBottom="0">{title}</Heading>
                                {position && <Paragraph>{position}</Paragraph>}
                                </Col>
                                </Row>
                            </Col>
                        })}
                    </Row>
                </Section>
            })}
		</Container>
    </Layout>
}
export default BasicPageTemplate;