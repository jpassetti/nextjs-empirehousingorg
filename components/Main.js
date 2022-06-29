import classNames from 'classnames/bind'

import styles from './main.module.scss'

let cx = classNames.bind(styles)

const Main = ({children}) => {
	let mainClasses = cx({
		main: true
	});
	return <main className={mainClasses}>{children}</main>
}
export default Main;
