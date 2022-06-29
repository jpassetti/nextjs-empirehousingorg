import classnames from 'classnames/bind'

import styles from './col.module.scss'

let cx = classnames.bind(styles)

export default function Col({ 
	alignItems,
	alignments, 
	attribs,
	badgeGridItem, 
	bgColor,
	borderLeft,
	children, 
	className, 
	color, 
	dataName,
	flexDirection,
	justifyContent, 
	lg, 
	md, 
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
	responsiveAlignments,
	responsiveMargins,
	responsivePaddings,
	sm, 
	sticky,
	textAlign, 	
	xs, 
}) {
	const classList = className?.split(' ')

	// xs:text-align-left sm:text-align-right
	const alignmentsArr = (attribs && attribs[`data-alignment`]) ? 
		attribs[`data-alignment`].split(" ") 
	: alignments ? 
		alignments.split(" ") 
	: responsiveAlignments ? 
		responsiveAlignments.split(" ") 
	: null;
	const alignmentsObj = {};
	alignmentsArr?.forEach(string => {
		const [key, value] = string.split(":");
		alignmentsObj[key] = value;
	});

	// ["xs:12", "sm:3"]
	const responsiveWidths = attribs && attribs[`data-responsive-widths`] ? attribs[`data-responsive-widths`].split(" ") : null;
	const responsiveObj = {};
	responsiveWidths?.forEach(string => {
		const [key, value] = string.split(":");
		responsiveObj[key] = value;
	});
	//console.log({ responsiveObj});

	const responsiveMarginsArr = (attribs && attribs[`data-responsive-margins`]) ? 
			attribs[`data-responsive-margins`].split(" ") 
		: responsiveMargins ?
			responsiveMargins.split(" ") 
		: null;
	const responsiveMarginsObj = {};
	responsiveMarginsArr?.forEach(string => {
		const [key, value] = string.split(":");
		responsiveMarginsObj[key] = value;
	});

	const responsivePaddingsArr = (attribs && attribs[`data-responsive-paddings`]) ?
		attribs[`data-responsive-paddings`].split(" ")
		: responsivePaddings ?
			responsivePaddings.split(" ")
			: null;
	const responsivePaddingsObj = {};
	responsivePaddingsArr?.forEach(string => {
		const [key, value] = string.split(":");
		responsivePaddingsObj[key] = value;
	});

	const colClasses = cx({
		col : true,
		[`col-xs-${responsiveObj['xs']}`]: responsiveObj.hasOwnProperty('xs'),
		[`col-sm-${responsiveObj['sm']}`]: responsiveObj.hasOwnProperty('sm'),
		[`col-md-${responsiveObj['md']}`]: responsiveObj.hasOwnProperty('md'),
		[`col-lg-${responsiveObj['lg']}`]: responsiveObj.hasOwnProperty('lg'),
		[`col-xs-${xs}`]: xs,
		[`col-sm-${sm}`]: sm,
		[`col-md-${md}`]: md,
		[`col-lg-${lg}`]: lg,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`align-items-${alignItems}`]: alignItems,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`text-align-${textAlign}`] : textAlign,
		[`xs-${alignmentsObj['xs']}`]: alignmentsObj.hasOwnProperty('xs'),
		[`sm-${alignmentsObj['sm']}`]: alignmentsObj.hasOwnProperty('sm'),
		[`md-${alignmentsObj['md']}`]: alignmentsObj.hasOwnProperty('md'),
		[`lg-${alignmentsObj['lg']}`]: alignmentsObj.hasOwnProperty('lg'),
		[`xs-${responsiveMarginsObj['xs']}`]: responsiveMarginsObj.hasOwnProperty('xs'),
		[`sm-${responsiveMarginsObj['sm']}`]: responsiveMarginsObj.hasOwnProperty('sm'),
		[`md-${responsiveMarginsObj['md']}`]: responsiveMarginsObj.hasOwnProperty('md'),
		[`lg-${responsiveMarginsObj['lg']}`]: responsiveMarginsObj.hasOwnProperty('lg'),
		[`xs-${responsivePaddingsObj['xs']}`]: responsivePaddingsObj.hasOwnProperty('xs'),
		[`sm-${responsivePaddingsObj['sm']}`]: responsivePaddingsObj.hasOwnProperty('sm'),
		[`md-${responsivePaddingsObj['md']}`]: responsivePaddingsObj.hasOwnProperty('md'),
		[`lg-${responsivePaddingsObj['lg']}`]: responsivePaddingsObj.hasOwnProperty('lg'),
		white : color === "white",
		[`badge-grid-item`]: badgeGridItem,
		sticky : sticky,
		[`border-left`] : borderLeft,
		[`margin-top-${marginTop}`] : marginTop,
		[`margin-right-${marginRight}`]: marginRight,
		[`margin-bottom-${marginBottom}`]: marginBottom,
		[`margin-left-${marginLeft}`]: marginLeft,
		[`margin-all-${margin}`]: margin,
		[`padding-top-${paddingTop}`]: paddingTop,
		[`padding-right-${paddingRight}`]: paddingRight,
		[`padding-bottom-${paddingBottom}`]: paddingBottom,
		[`padding-left-${paddingLeft}`]: paddingLeft,
		[`padding-all-${padding}`]: padding,
		[`bgColor-${bgColor}`] : bgColor
	})

	return (
		<div data-name={dataName} className={colClasses}>
			{children}
		</div>
	)
}
