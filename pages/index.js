import Head from 'next/head'
import Image from 'next/image'

import Banner from '/components/Banner'
import About from '/components/About'
import EducationCard from '/components/EducationCard';
import ExperienceCard from '/components/ExperienceCard';
import ProjectCard from '/components/ProjectCard';
import SkillPill from '/components/SkillPill';

const eduList = [
	{
		duration: "2018-Present",
		imgPath: "assets/iiitd.png",
		courseName: "B.Tech in Computer Science and Engineering",
		instituteName: "IIIT-D",
		grade: "7.91 CGPA",
		gradeShow: false,
	},
	{
		duration: "2017-18",
		imgPath: "assets/kv.png",
		courseName: "CBSE Std. 12",
		instituteName: "Kendriya Vidyalaya Vikaspuri",
		grade: "90.0%"
	},
	{
		duration: "2015-16",
		imgPath: "assets/kv.png",
		courseName: "CBSE Std. 10",
		instituteName: "Kendriya Vidyalaya Vikaspuri",
		grade: "10.0 CGPA"
	}
]

const expList = [
	{
		duration: "May 2021 - July 2021",
		imgPath: "assets/iiitd.png",
		companyName: "Research Intern at IIIT-D",
		description: "Image Classification using Pretrained CNN models (ResNet50, VGG16, etc.) on Insect dataset containing 4000 images and 4 order level insect classes. Preprocessed the images by resizing and data augmentation. Fine tuned the pre-trained models to achieve accuracy of ~93.5% on the test set.",
		techUsed: "Transfer Learning, Machine Learning, Python, OpenCV, PyTorch and Tensorflow"
	}
]

const projList = [
	{
		duration: "Jan 2021 - Apr 2021",
		advisor: "Dr. Ponnurangam Kumaraguru",
		projName: "WhatsApp-A-Mole",
		description: "An interactive game to educate people about various technical details in Whatsapp Privacy Policy. The idea of this game is taken from the classical Whack-A-Mole game.",
		techUsed: "HTML, CSS, JavaScript and FireBase",
		liveDemoShow: true,
		liveDemo: "https://pankilkalra.github.io/cse648-psosm-project/",
		githubLinkShow: true,
		githubLink: "https://github.com/pankilkalra/cse648-psosm-project",
	},
	{
		duration: "Aug 2020 - Dec 2020",
		advisor: "Dr. Jainendra Shukla",
		projName: "H1-B Visa Approval Prediction",
		description: "Worked with official 2019 data of the US which has 600k data points and 9k columns. Preprocessed the data and applied state of the art machine learning models to achieve best accuracy of 84%.",
		techUsed: "Python, Pandas, NumPy, sklearn and imblearn",
		liveDemoShow: false,
		githubLinkShow: true,
		githubLink: "https://github.com/himanshuraj18/H1B-Work-Visa-Approval",
	},
	{
		duration: "Jan 2020 - Apr 2020",
		advisor: "Dr. Mukesh Mohania",
		projName: "Modern Online Shop",
		description: "Designed Online Shop Portal catering to multiple stakeholders like Shop Owner, Manager, Employee and Customer. Integrated the feature where the owner/manager can predict the sales for a particular month.",
		techUsed: "Python and MySQL",
		liveDemoShow: false,
		githubLinkShow: true,
		githubLink: "https://github.com/rmakkar2018/Online_Shop",
	},
	{
		duration: "Aug 2019 - Dec 2019",
		advisor: "Dr. Vivek Kumar",
		projName: "Plants vs Zombies Game",
		description: "Plants vs Zombies Game made from scratch using JavaFX framework. Used FXML for designing the screen and JAVA for backend. Used ER Diagrams for structuring classes and implementing OOPs.",
		techUsed: "Java, JavaFX and FXML Scene Builder",
		liveDemoShow: false,
		githubLinkShow: true,
		githubLink: "https://github.com/himanshuraj18/PlantsVsZombies",
	}
]

const skillList = [
	{
		name: "Python",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
	},
	{
		name: "Java",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
	},
	{
		name: "C++",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
	},
	{
		name: "JavaScript",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
	},
	{
		name: "HTML",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
	},
	{
		name: "CSS",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
	},
	{
		name: "Tailwind CSS",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
	},
	{
		name: "ReactJS",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		name: "NextJS",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
	},
	{
		name: "MySQL",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
	},
	{
		name: "Linux/Unix",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
	},
	{
		name: "Git/GitHub",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
	},
	{
		name: "Tensorflow",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
	},
	{
		name: "PyTorch",
		imgPath: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
	},
	{
		name: "Jupyter",
		imgPath: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"
	}
]

export default function Home() {
	<Head>
		<link rel="stylesheet" href="devicon.min.css"/>
	</Head>
	return (
		<>
			<Banner />
			<div id="about" className="flex flex-col my-8 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> About Me </h1>
				<About />
			</div>
			<div id="education" className="flex flex-col my-20 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> Education </h1>
				{eduList.map((edu, index) => {
					return (
						<EducationCard key={index} {...edu} />
					);
				})
				}
			</div>
			<div id="experience" className="flex flex-col my-20 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> Experience </h1>
				{expList.map((exp, index) => {
					return (
						<ExperienceCard key={index} {...exp} />
					);
				})
				}
			</div>
			<div id="project" className="flex flex-col my-20 mx-40">
				<h1 className="text-3xl my-4 mx-auto font-medium"> Projects </h1>
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
				<h1 className="text-3xl my-4 mx-auto font-medium"> Skills </h1>
				<div className="grid grid-cols-5 gap-2 my-4">
					{skillList.map((skill, index) => {
						return (
							<SkillPill key={index} {...skill} />
						);
					})
					}
				</div>
			</div>
		</>
	);
}
