import classNames from 'classnames/bind'
import Link from 'next/link'

import styles from './anchorlink.module.scss'

let cx = classNames.bind(styles)

const AnchorLink = ({attribs, children, href, target, rel}) => {
	
	const newUrl = new URL(attribs.href);

	if (newUrl.host === "api.empirehousing.org") {
		return <Link href={newUrl.pathname}>
			<a>
				{children}
			</a>
		</Link>
	} else if (attribs && attribs.href) {
		return <a className={styles.anchor_link} href={attribs.href} target={attribs.target} rel={attribs.rel}>{children}</a>
	} else {
		return <a className={styles.anchor_link} href={href} target={target} rel={rel}>{children}</a>
	}
	
}
export default AnchorLink;
