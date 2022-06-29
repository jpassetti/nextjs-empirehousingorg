import classnames from 'classnames/bind'

import styles from './row.module.scss'

let cx = classnames.bind(styles)

const Row = ({ 
	attribs, 
	name, 
	children, 
	justifyContent,
	flexDirection,
	hideMobile,
	alignItems,
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
	bt,
	sticky,
	fullScreen,
	dataName,
	id
}) => {
	//console.log({ attribs });
	const rowClasses = cx({
		row : true,
		[`justify-content-${justifyContent}`] : justifyContent,
		[`justify-content-${attribs && attribs['data-justify-content']}`]: attribs && attribs['data-justify-content'],
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
		bt: bt,
		sticky : sticky,
		fullScreen: fullScreen,
		[`flex-direction-${flexDirection}`] : flexDirection,
		[`align-items-${alignItems}`] : alignItems,
		hideMobile: hideMobile
	})

	return (
		<div data-name={dataName} className={rowClasses} id={id}>
			{children}
		</div>
	)
}
export default Row;