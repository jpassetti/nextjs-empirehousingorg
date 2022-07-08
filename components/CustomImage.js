import Image from 'next/image'

const CustomImage = ({ attribs }) => {
	//console.log({attribs});
	return <Image 
		src={attribs.src}
		alt={attribs.alt}
		width={attribs.width}
		height={attribs.height}
	/>
}
export default CustomImage
