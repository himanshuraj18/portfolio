import Banner from '/components/Banner'
import About from '/components/About'
import EducationCard from '/components/EducationCard';
import ExperienceCard from '/components/ExperienceCard';
import ProjectCard from '/components/ProjectCard';
import SkillPill from '/components/SkillPill';
import ActivityCard from '/components/ActivityCard';
import SocialPill from '/components/SocialPill';
import * as Lists from '/components/Lists'

const eduList = Lists.eduList;
const expList = Lists.expList;
const projList = Lists.projList;
const skillList = Lists.skillList;
const activitiesList = Lists.activitiesList;
const socialsList = Lists.socialsList;

export default function Home() {
	return (
		<>
			<Banner />
			<div id="about" className="flex flex-col my-8 mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> About Me </h1>
				<About />
			</div>
			<div id="education" className="flex flex-col my-20 mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Education </h1>
				{eduList.map((edu, index) => {
					return (
						<EducationCard key={index} {...edu} />
					);
				})
				}
			</div>
			<div id="experience" className="flex flex-col my-20 mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Experience </h1>
				{expList.map((exp, index) => {
					return (
						<ExperienceCard key={index} {...exp} />
					);
				})
				}
			</div>
			<div id="project" className="flex flex-col my-20 mx-40">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Projects </h1>
				<div className="grid grid-cols-2 gap-2 my-4">
					{projList.map((proj, index) => {
						return (
							<ProjectCard key={index} {...proj} />
						);
					})
					}
				</div>
			</div>
			<div id="skills" className="flex flex-col my-20 mx-40">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Skills </h1>
				<div className="grid grid-cols-5 gap-2 my-4">
					{skillList.map((skill, index) => {
						return (
							<SkillPill key={index} {...skill} />
						);
					})
					}
				</div>
			</div>
			<div id="activities" className="flex flex-col my-20 mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Activities </h1>
				{activitiesList.map((activity, index) => {
					return (
						<ActivityCard key={index} {...activity} />
					);
				})
				}
			</div>
			<div id="socials" className="flex flex-col my-20 mx-40">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Socials </h1>
				<div className="grid grid-cols-5 gap-2 my-8">
					{socialsList.map((social, index) => {
						return (
							<SocialPill key={index} {...social} />
						);
					})
					}
				</div>
			</div>
		</>
	);
}
