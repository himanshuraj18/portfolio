import Head from 'next/head'
import Image from 'next/image'

import Banner from '/components/Banner'
import About from '/components/About'
import EducationCard from '/components/EducationCard';
import ExperienceCard from '/components/ExperienceCard';

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
		companyName: "IIIT-D (Advisor - Dr. Swapna Purandare)",
		description: "Image Classification using Pretrained CNN models (ResNet50, VGG16, etc.) on Insect dataset containing 4000 images and 4 order level insect classes. Preprocessed the images by resizing and data augmentation. Fine tuned the pre-trained models to achieve accuracy of ~93.5% on the test set.",
		techUsed: "Transfer Learning, Machine Learning, Python, OpenCV, PyTorch and Tensorflow"
	}
]

export default function Home() {
	return (
		<>
			<Banner />
			<div id="about" className="flex flex-col my-8 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> About Me </h1>
				<About />
			</div>
			<div id="education" className="flex flex-col my-32 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> Education </h1>
				{eduList.map((edu, index) => {
					return (
						<EducationCard key={index} {...edu} />
					);
				})
				}
			</div>
			<div id="experience" className="flex flex-col my-32 mx-96">
				<h1 className="text-3xl my-4 mx-auto font-medium"> Experience </h1>
				{expList.map((exp, index) => {
					return (
						<ExperienceCard key={index} {...exp} />
					);
				})
				}
			</div>
		</>
	);
}
