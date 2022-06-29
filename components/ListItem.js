import classNames from 'classnames/bind'

import styles from './listitem.module.scss'

let cx = classNames.bind(styles)

const ListItem = ({ children }) => {
	let listItemClasses = cx({
		list_item: true,
	});
	return <li className={listItemClasses}>{children}</li>

}
export default ListItem;
