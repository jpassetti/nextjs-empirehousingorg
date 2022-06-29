import classNames from 'classnames/bind'

import styles from './span.module.scss'

let cx = classNames.bind(styles)

const Span = ({ children, color, gradient, fontSize }) => {
	let spanClasses = cx({
		span: true,
		tealGradient : color === "teal" && gradient,
		violetGradient: color === "violet" && gradient,
		crazy: color === "crazy" && gradient,
		[`font-size-${fontSize}`] : fontSize
	})
	return <span className={spanClasses}>{children}</span>
}
export default Span
