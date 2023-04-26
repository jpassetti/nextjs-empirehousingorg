import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Col from '../../components/Col'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import MainContent from "../../components/MainContent"
import Row from "../../components/Row"

import { getPageBySlug, getMainMenuItems, getAllProjectTypes } from '../../lib/api'
import { Fragment } from 'react'


export async function getStaticProps() {

	//const pageData = await getPageBySlug("portfolio");
   // const newConstructionProjects = await getProjectsByType("new-construction");
   // const rehabProjects = await getProjectsByType("vacant-housing-rehab");
   const projectTypes = await getAllProjectTypes();
	const menuItems = await getMainMenuItems();

	return {
		props: {
            menuItems,
            projectTypes
		}
	}

}

const BasicPageTemplate = ({
    menuItems, 
    projectTypes
}) => {
    return <Layout menuItems={menuItems}>
		<Head>
			<title>Portfolio | Empire Housing and Development Corporation | Syracuse, NY</title>
		</Head>
		<Container>
        <Heading name="h1">Portfolio</Heading>
        {projectTypes.map((projectType, index) => {
            const {name, slug:projectTypeSlug, constructionProjects} = projectType.node;
            return <div key={`section${index}`}>
                <Heading name="h2">{name}</Heading>
                <Row>
                {constructionProjects.edges.map((edge, index) => {
                    const { node } = edge;
                    const { title, slug:constructionProjectSlug, featuredImage } = node;
                    return <Col sm="6" md="4" key={index}>
                        {featuredImage &&
                            <Link href={`/portfolio/${projectTypeSlug}/${constructionProjectSlug}`}>
                                <a>
                                <Image 
                                    src={featuredImage.node.sourceUrl}
                                    alt={featuredImage.node.altText}
                                    width={featuredImage.node.mediaDetails.width}
                                    height={featuredImage.node.mediaDetails.height}
                                />
                            </a>
                            </Link>
                        }
                         <Heading name="h3">
                         <Link href={`/portfolio/${projectTypeSlug}/${constructionProjectSlug}`}>
                            <a>{title}</a>
                        </Link></Heading>
                        </Col>
                })} 
                </Row>
            </div>
        })}
		</Container>
    </Layout>
}
export default BasicPageTemplate;