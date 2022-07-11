export default function EducationCard(props) {
    return (
        <div className="flex flex-row bg-gray-200 rounded-lg my-4">
            <img src={props.imgPath} className="h-16 sm:h-20 w-16 sm:w-20 object-contain my-auto mx-2 sm:mx-8"/>
            <div className="my-auto p-4 sm:p-8 flex flex-col">
                <span className="text-2xl font-bold">{props.instituteName}</span>
                <span className="text-lg font-medium mb-4">{props.courseName}</span>
                <span ><b>Duration:</b> {props.duration}</span>
                <span className={props.gradeShow? null : "invisible"}><b>Grade:</b> {props.gradeShow? props.grade: null}</span> 
            </div>
        </div>
    );
}

EducationCard.defaultProps = {
    duration: "StartYear-EndYear",
    imgPath: "broken_img.png",
    courseName: "Course Name Here",
    instituteName: "Institute Name Here",
    grade: "00.00%",
    gradeShow: true,
}