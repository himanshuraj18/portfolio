export default function ExperienceCard(props) {
    return (
        <div className="flex flex-row bg-gray-200 rounded-lg my-4">
            <img src={props.imgPath} className="h-20 w-20 object-contain my-auto mx-8"/>
            <div className="my-auto p-8 flex flex-col">
                <span className="text-2xl font-bold">{props.companyName}</span>
                <span className="text-base mb-4">{props.description}</span>
                <span ><b>Duration:</b> {props.duration}</span>
                <span ><b>Technology Used:</b> {props.techUsed}</span>
            </div>
        </div>
    );
}

ExperienceCard.defaultProps = {
    duration: "StartYear-EndYear",
    imgPath: "broken_img.png",
    companyName: "Company Name Here",
    description: "Description Here",
    techUsed: "Tech-Stack used here"
}