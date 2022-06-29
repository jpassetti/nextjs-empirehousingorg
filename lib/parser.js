import parse from 'html-react-parser';

import Link from 'next/link'

import AnchorLink from '../components/AnchorLink'
import Blockquote from '../components/Blockquote'
import Br from '../components/Br'
import Cite from '../components/Cite'
import Div from '../components/Div'
import Em from '../components/Em'
import Figure from '../components/Figure'
import Heading from '../components/Heading'
import List from '../components/List'
import ListItem from '../components/ListItem'
import Paragraph from '../components/Paragraph'
import Section from '../components/Section'
import Span from '../components/Span'
import Strong from '../components/Strong'
import Text from '../components/Text'
import Table from '../components/Table'
import Tbody from '../components/Tbody'
import Thead from '../components/Thead'
import Tr from '../components/Tr'
import Th from '../components/Th'
import Td from '../components/Td'

const tagParser = (domNode) => {
	//console.log("parsing tag"); 
	//console.log({domNode})
	const getPsuedoID = () => Math.floor(Math.random() * 1e15);

	const components = {
		section: Section,
		div: Div,
		h1: Heading,
		h2: Heading,
		h3: Heading,
		h4: Heading,
		p: Paragraph,
		blockquote: Blockquote,
		cite: Cite,
		ul: List,
		ol: List,
		li: ListItem,
		a: AnchorLink,
		strong: Strong,
		em: Em,
		span: Span,
		br : Br,
		table : Table,
		thead : Thead,
		tbody: Tbody,
		figure: Figure,
		tr : Tr,
		td: Td,
		th: Th
	}
	if (domNode.type === "text") {
		const { data } = domNode;
		//console.log(domNode, { depth: null });
		return <Text key={`${domNode.type}${getPsuedoID()}`}>{data}</Text>
	} else {
		const { attribs, name, children } = domNode;
		const ComponentName = components[name];
		return <ComponentName attribs={domNode.attribs ? attribs : ''} key={`${name}${getPsuedoID()}`} name={name}>{(children && children.length > 0) && children.map((child) => {
			return tagParser(child);
		})}</ComponentName>
	}
} // tagParser end


const ContentParser = ({content}) => {
	const options = {
		replace: domNode => {
			return tagParser(domNode);
		}
	};
	//console.log({ content });
	return (content !== '') ? parse(content, options) : '';
}
export default ContentParser;