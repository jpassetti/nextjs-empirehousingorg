import classnames from 'classnames/bind'

import Image from 'next/image'

import styles from './buttonui.module.scss'

let cx = classnames.bind(styles)

const ButtonUI = ({type, clickHandler}) => {
    let buttonuiClasses = cx({
		btnui: true,
		[`${type}`] : type
	});
    return <button onClick={clickHandler} className={buttonuiClasses}>
        <Image 
            src={`/images/icon-${type}.svg`}
            alt={`${type} icon`}
            width="48"
            height="48"
        />
    </button>
}
export default ButtonUI