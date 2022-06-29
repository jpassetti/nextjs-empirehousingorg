import ContentParser from '../lib/parser'
import Container from './Container'

const MainContent = ({content, children}) => {
	return content ? <ContentParser content={content} /> : children
}

export default MainContent;
