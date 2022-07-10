import { eduList, expList, projList, skillList, responsibilitiesList } from '/components/Lists'
import Banner from '/components/Banner'
import About from '/components/About'
import EducationCard from '/components/EducationCard';
import ExperienceCard from '/components/ExperienceCard';
import ProjectCard from '/components/ProjectCard';
import SkillPill from '/components/SkillPill';
import ResponsibilityCard from '/components/ResponsibilityCard';

export default function Home() {
	return (
		<div className="flex flex-col w-full">
			<Banner />
			<div id="about" className="flex flex-col sm:my-8 sm:mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> About Me </h1>
				<About />
			</div>
			<div id="education" className="flex flex-col sm:my-20 sm:mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Education </h1>
				<div className="grid grid-cols-1 gap-2 my-4 mx-auto">
					{eduList.map((edu, index) => {
						return (
							<EducationCard key={index} {...edu} />
						);
					})
					}
				</div>
			</div>
			<div id="experience" className="flex flex-col sm:my-20 sm:mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Experience </h1>
				<div className="grid grid-cols-1 gap-2 my-4">
					{expList.map((exp, index) => {
						return (
							<ExperienceCard key={index} {...exp} />
						);
					})
					}
				</div>
			</div>
			<div id="project" className="flex flex-col sm:my-20 sm:mx-40">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Projects </h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
					{projList.map((proj, index) => {
						return (
							<ProjectCard key={index} {...proj} />
						);
					})
					}
				</div>
			</div>
			<div id="skills" className="flex flex-col sm:my-20 sm:mx-40">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Skills </h1>
				<div className="grid grid-cols-3 sm:grid-cols-5 gap-2 my-4">
					{skillList.map((skill, index) => {
						return (
							<SkillPill key={index} {...skill} />
						);
					})
					}
				</div>
			</div>
			<div id="responsibilities" className="flex flex-col sm:my-20 sm:mx-96">
				<h1 className="text-4xl my-4 mx-auto font-medium"> Responsibilities </h1>
				<div className="grid grid-cols-1 gap-2 my-4">
					{responsibilitiesList.map((responsibility, index) => {
						return (
							<ResponsibilityCard key={index} {...responsibility} />
						);
					})
					}
				</div>
			</div>
		</div>
	);
}
