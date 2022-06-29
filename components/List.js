import classNames from 'classnames/bind'

import styles from './list.module.scss'

let cx = classNames.bind(styles)

const List = ({ children }) => {
	let listClasses = cx({
		list: true,
		bullets: true
	});
	return <ul className={listClasses}>{children}</ul>
}
export default List;
