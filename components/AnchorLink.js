import classNames from 'classnames/bind'
import Link from 'next/link'

import styles from './anchorlink.module.scss'

let cx = classNames.bind(styles)

const AnchorLink = ({attribs, children, href, target, rel}) => {
	//console.log({ attribs });
	const newUrl = new URL(attribs.href);
	//console.log({newUrl});

	if (newUrl.host === "api.empirehousing.org") {
		const splitPathname = newUrl.pathname.split("/");
		//console.log({splitPathname});
		if (splitPathname[1] === "wp-content") {
			// allow PDF links to media library on the api website
			return <Link href={newUrl.href}>
				<a>
					{children}
				</a>
			</Link>
		} else {
			// remove "api.empirehousing.org" for paths to pages
			return <Link href={newUrl.pathname}>
				<a>
					{children}
				</a>
			</Link>
		}
		
	} else if (attribs && attribs.href) {
		return <a className={styles.anchor_link} href={attribs.href} target={attribs.target} rel={attribs.rel}>{children}</a>
	} else {
		return <a className={styles.anchor_link} href={href} target={target} rel={rel}>{children}</a>
	}
	
}
export default AnchorLink;
