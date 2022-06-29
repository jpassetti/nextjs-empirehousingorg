import Image from 'next/image'

const Logo = () => {
    return <Image 
        src="/images/logo.svg"
        alt="Empire Housing"
        width="400"
        height="200"
    />
}
export default Logo;