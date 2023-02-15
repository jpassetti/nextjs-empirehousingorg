import styles from './showcaseImage.module.scss'

const ShowcaseImage = ({ src, alt, width, height }) => {
    return <div 
    className={styles.showcaseImage} 
    style={{backgroundImage: `url(${src})`}}
    />
}
export default ShowcaseImage;