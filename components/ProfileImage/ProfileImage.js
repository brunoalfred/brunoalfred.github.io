import utilStyles from '../../styles/utils.module.css'
import Image from 'next/image'

export default function ProfileImage({height, width, name}){
    return (
        <>
        
            <Image
                priority
                src="/images/jasirilogo.jpg"
                className={utilStyles.borderCircle}
                height={height}
                width={width}
                alt={name}
            />
        </>
    )
}