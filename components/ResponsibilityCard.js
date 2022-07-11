export default function ActivityCard(props) {
    return (
        <div className="flex flex-row bg-white bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-lg my-2">
            <div className="my-auto p-8 flex flex-col">
                <span className="text-2xl font-bold">{props.name}</span>
                <span className="text-base text-justify mb-4">{props.description}</span>
                <span ><b>Duration:</b> {props.duration}</span>
            </div>
        </div>
    );
}

ActivityCard.defaultProps = {
    name: "Activity Name Here",
    description: "Description Here",
    duration: "Start - End"
}