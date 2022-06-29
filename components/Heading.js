import classNames from 'classnames/bind'

import styles from './heading.module.scss'

let cx = classNames.bind(styles)

const Heading = ({
	attribs, 
	caps, 
	category, 
	children, 
	className,
	color,
	margin,
	marginTop,
	marginRight,
	marginLeft,
	marginBottom,
	padding,
	paddingTop,
	paddingRight,
	paddingBottom,
	paddingLeft,
	responsiveMargins, 
	responsiveTextAlignments,
	name,
	title, 
	type, 
	textAlign, 
}) => {
	console.log({name});
	const marginsArr = responsiveMargins ? responsiveMargins.split(" ") : null;
	const marginsObj = {};
	marginsArr?.forEach(string => {
		const [key, value] = string.split(":");
		marginsObj[key] = value;
	});

	const textAlignmentsArr = responsiveTextAlignments ? responsiveTextAlignments.split(" ") : null;
	const textAlignmentsObj = {};
	textAlignmentsArr?.forEach(string => {
		const [key, value] = string.split(":");
		textAlignmentsObj[key] = value;
	});



	let headingClasses = cx({
		heading: true,
		heading1: type === "h1" || name === "h1",
		heading2: type === "h2" || name === "h2",
		heading3: type === "h3" || name === "h3",
		heading4: type === "h4" || name === "h4",
		heading5: type === "h5" || name === "h5",
		heading6: type === "h6" || name === "h6",
		title: (attribs && attribs[`data-variant`] === "title") || title,
		[`color-${color}`] : color,
		[`margin-top-${marginTop}`]: marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-1`]: attribs && attribs[`data-margin-bottom`] === "1" ? true : false,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`margin-all-${margin}`]: margin,
		[`padding-top-${paddingTop}`]: paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-all-${padding}`]: padding,
		[`text-align-${textAlign}`] : textAlign,
		[`xs-text-align-${textAlignmentsObj['xs']}`] : textAlignmentsObj.hasOwnProperty('xs'),
		[`sm-text-align-${textAlignmentsObj['sm']}`] : textAlignmentsObj.hasOwnProperty('sm'),
		[`md-text-align-${textAlignmentsObj['md']}`] : textAlignmentsObj.hasOwnProperty('md'),
		[`lg-text-align-${textAlignmentsObj['lg']}`] : textAlignmentsObj.hasOwnProperty('lg'),
		category: category,
		caps: caps,
		[`${className}`]: className
	});
	switch (name) {
		case "h1":
			return <h1 className={headingClasses}>{children}</h1>
			break;
		case "h2":
			return <h2 className={headingClasses}>{children}</h2>
			break;
		case "h3":
			return <h3 className={headingClasses}>{children}</h3>
			break;
		case "h4":
			return <h4 className={headingClasses}>{children}</h4>
			break;
		case "h5":
			return <h5 className={headingClasses}>{children}</h5>
			break;
		case "h6":
			return <h6 className={headingClasses}>{children}</h6>
			break;
		default:
			return <p>The heading type that you provided doesn't match the expected values.</p>
	}
	
}
export default Heading;
