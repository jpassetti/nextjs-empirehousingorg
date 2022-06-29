import classNames from 'classnames/bind'

import styles from './paragraph.module.scss'

let cx = classNames.bind(styles)

const Paragraph = ({
	attribs, 
	name, 
	children,
	color,
	intro, 
	label,
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
	textAlign,
	}) => {
	//console.log({children});
	let paragraphClasses = cx({
		paragraph: true,
		intro: intro || attribs?.class === "intro",
		[`color-${color}`]: color,
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
		label: label
	});
	return <p className={paragraphClasses}>{children}</p>
}
export default Paragraph;
