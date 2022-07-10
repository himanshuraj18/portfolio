import Link from 'next/link'

export default function SocialPill(props) {
    return (
        <Link href={props.link}>
            <a target="_blank">
                <div className="flex">
                    <img src={props.imgPath} className="object-contain h-16 w-16 p-2 rounded-sm"></img>
                </div>
            </a>
        </Link>
    );
}

SocialPill.defaultProps = {
    imgPath: "icon-link-here",
    link: "social-media-link-here"
}