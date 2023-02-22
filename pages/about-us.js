import Col from "../components/Col";
import Container from "../components/Container";
import Head from "next/head";
import Heading from "../components/Heading";
import Image from "next/image";
import Layout from "../components/Layout";
import MainContent from "../components/MainContent";
import Row from "../components/Row";
import Section from "../components/Section";

import {getProjectTypes, getMainMenuItems, getPageBySlug} from "../lib/api";
import Paragraph from "../components/Paragraph";

export async function getStaticProps() {

    const pageData = await getPageBySlug("about-us");
	const projectTypes = await getProjectTypes();
	const menuItems = await getMainMenuItems();

	return {
		props: {
			pageData, projectTypes, menuItems
		}
	}

}


const AboutLandingPage = ({pageData, projectTypes, menuItems}) => {
    const {title, content} = pageData;
    return <Layout menuItems={menuItems}>
    <Head>
        <title>About | Empire Housing and Development Corporation | Syracuse, NY</title>
    </Head>
    <Container>
        <Heading name="h1">{title}</Heading>
        <MainContent content={content} />
       
            {projectTypes.map(edge => {
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
export default AboutLandingPage;