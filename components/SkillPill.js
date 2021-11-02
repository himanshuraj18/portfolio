export default function SkillPill(props) {
    return (
        <div className="flex flex-row gap-2">
            <div className="m-auto flex flex-row">
                <img src={props.imgPath} className="object-contain h-12 w-12 p-2 my-auto rounded-full"></img>
                <h1 className="text-xl my-auto">{props.name}</h1>
            </div>
        </div>
    );
}

SkillPill.defaultProps = {
    name: "skill",
    imgPath: "icon-link"
}