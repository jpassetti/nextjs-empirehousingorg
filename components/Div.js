import classnames from 'classnames/bind'

import styles from './div.module.scss'

let cx = classnames.bind(styles)

import Container from './Container'
import Col from './Col'
import Logo from './Logo'
import Row from './Row'

function get_jsx_object(splitStyles) {
	let reformatted_css_prop
	switch (splitStyles[0]) {
		case 'background-color':
			reformatted_css_prop = { backgroundColor : splitStyles[1] }
			break;
		default:
			reformatted_css_prop = { backgroundColor: "transparent" }
	}
	return reformatted_css_prop
}


const Div = ({ 
	attribs, 
	children, 
	className, 
	color, 
	fullScreen, 
	flexDirection,
	height,
	alignItems,
	margin,
	marginTop,
	marginRight,
	marginBottom,
	marginLeft,
	padding,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	justifyContent,
	textAlign,
	sticky,
	id=false,
	name
	}) => {
		console.log({attribs});

	const splitClasses = attribs ? attribs.class.split(" ") : null;
	
	let jsxObj = null;
	let splitStyles = null;

	if (attribs && attribs.style) {
		splitStyles = attribs.style.split(":");
		console.log({splitStyles});
		jsxObj = get_jsx_object(splitStyles);
		console.log({ jsxObj });
	}
	
	
		
	const divClasses = cx({
		div: true,
		full_screen : fullScreen,
		sticky: sticky,
		[`${color}`] : color,
		[`height-${height}`] : height,
		[`align-items-${alignItems}`] : alignItems,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`margin-top-${marginTop}`]: marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`margin-all-${margin}`]: margin,
		[`padding-top-${paddingTop}`]: paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-all-${padding}`]: padding,
		[`text-align-${textAlign}`]: textAlign,
		[`row`] : attribs ? splitClasses?.includes('wp-block-columns') : false,
		[`col`] : attribs ? splitClasses?.includes('wp-block-column') : false,
		[`wp-block-group`]: attribs ? splitClasses?.includes('wp-block-group') : false,
		[`has-background`]: attribs ? splitClasses?.includes('has-background') : false,
		[`wp-block-group__inner-container`]: attribs ? splitClasses?.includes('wp-block-group__inner-container') : false,
		//[`wp-block-columns`]: attribs ? splitClasses?.includes('wp-block-columns') : false,
		//[`wp-block-column`]: attribs ? splitClasses?.includes('wp-block-column') : false,
 	});
	if (attribs && attribs[`data-component`] === "container") {
		return <Container name={name} attribs={attribs}>{children}</Container>
	} else if (attribs && attribs[`data-component`] === "row") {
		return <Row attribs={attribs} name={name}>{children}</Row>
	} else if (attribs && attribs[`data-component`] === "col") {
		return <Col name={name} attribs={attribs} className={attribs.className}>{children}</Col>
	} else if (attribs && attribs[`data-component`] === "logo") {
		return <Logo attribs={attribs} />
	} else if (fullScreen) {
		return <div id={id ? id : ''} name={name} className={divClasses}>{children}</div>
	} else {
		return <div id={id ? id : ''} name={name} className={`${divClasses} ${className}`} style={ jsxObj }>{children}</div>
	}
	
}
export default Div
