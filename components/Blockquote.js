import Cite from './Cite'
import Container from './Container'
import Heading from './Heading'
import Paragraph from './Paragraph'
import Section from './Section'

import styles from './blockquote.module.scss'

const Blockquote = ({
	children, 
	citeName, 
	citeJob, 
	citeCompany,
	ctaLabel,
	ctaPath,
	quote, 
	headline,
}) => {
	return <Section backgroundColor="light_teal" paddingTop="4" paddingBottom="4">
		<Container content>
			{headline &&
				<Heading name="h2" title marginBottom="1">{headline}</Heading>
			}
			<blockquote className={styles.blockquote}>
				{quote ? <Paragraph>"{quote}"</Paragraph> : ''}
				{citeName &&
					<Cite>{citeName}, {citeJob ? citeJob : ''} {citeCompany ? `at ${citeCompany}` : ''}</Cite>
				}
				
				{children}
			</blockquote>
		</Container>
	</Section>
}
export default Blockquote;
