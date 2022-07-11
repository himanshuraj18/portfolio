import Link from 'next/link'

export default function ProjectCard(props) {
	return (
		<div className="flex bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-lg">
			<div className="my-auto p-8 flex flex-col">
				<span className="text-2xl font-bold">{props.projName}</span>
				<span className="text-lg font-medium">{props.advisor}</span>
				<span className="text-base text-justify">{props.description}</span>
				<span className="my-4"><b>Technology Used:</b> {props.techUsed}</span>
				<span ><b>Duration:</b> {props.duration}</span>
				<div className="flex flex-row mt-2 gap-2">
					{props.githubLinkShow ? <div className="px-4 py-1 bg-blue-500 text-sm text-white rounded"><Link href={props.githubLink}><a target="_blank">GitHub Link &#8599;</a></Link></div>: null}
					{props.liveDemoShow ? <div className="px-4 py-1 bg-blue-500 text-sm text-white rounded"><Link href={props.liveDemo}><a target="_blank">Live Demo Link &#8599;</a></Link></div>: null}
				</div>
			</div>
		</div>
	);
}

ProjectCard.defaultProps = {
	duration: "Start - End",
	advisor: "Advisor Name Here",
	projName: "Project Name Here",
	description: "Description Here",
	techUsed: "Tech Stack Used Here",
	liveDemoShow: false,
	liveDemo: "livedemo-link",
	githubLinkShow: false,
	githubLink: "github-link", 
}