import classnames from 'classnames/bind'

import styles from './container.module.scss'

let cx = classnames.bind(styles)

import Div from './Div'

const Container = ({ 
	attribs, 
	children, 
	content, 
	verticalAlign, 
	fullHeight, 
	fullWidth, 
	alignItems, 
	flexDirection, 
	justifyContent, 
	pt, 
	pb, 
	textAlign 
}) => {
	const containerClasses = cx({
		container: true,
		content: (attribs && attribs[`data-variant`] === "content") || content,
		[`full-height`] : fullHeight,
		[`full-width`] : fullWidth,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`align-items-${alignItems}`] : alignItems,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`pt${pt}`] : pt,
		[`pb${pb}`] : pb,
		[`text-align-${textAlign}`] : textAlign
	});
	return <Div className={containerClasses}>{children}</Div>
}
export default Container;
