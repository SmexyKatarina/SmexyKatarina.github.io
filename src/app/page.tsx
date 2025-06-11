import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import SkillTile from "../../components/skillTile";
import ProjectTile from "../../components/projectTile";

export default function HomePage() {

	const sectionStyles = "flex flex-col items-center w-screen min-h-[600px] text-center [&_h2]:text-[2.2rem] [&_h3]:text-[1.85rem] [&>h2~p]:text-[1.45rem] ";

	const inputStyles = "m-[10px] p-[10px] border-[2px] rounded-sm text-white placeholder:text-gray-400 focus:outline-2 focus:outline-offset-3 focus:outline-blue-400 "

	return (
		<div id="top" className="w-screen h-screen ">
			<Header />
			<main id="content" className="[&>div:not(.divider)]:p-[20px]">
				<div className="divider relative">
					<div id="about" className="absolute -top-[100px] h-[1px]"></div>
				</div>
				<div className={sectionStyles + "w-full bg-(image:--about-tile) bg-cover bg-center [&>*]:m-[10px] [&>*]:w-[70%] justify-evenly"}>
					<h2>About Me</h2>
					<p>Im an aspiring software, website and modding developer. I have taken programming as a passion when I was younger, experimenting on various different little projects. During 2020, I took the time to delve into modding games and ended up finding back the spark to continue the journey. Started a full-stack course in 2023 and finished it in 2024 and now trying to get into the market.</p>
					<p>This is a website dedicated to show my experience and what I&apos;ve made over the years. Now that this is a more serious part of my life, Im trying to improve my skills every day and hopefully become a freelance in the future.</p>
					<p>If you&apos;re interested in talking with me, <Link href="#contact" className="text-[#5588DD] transition-all duration-300 underline underline-offset-2 hover:text-blue-200">contact me</Link> and ill get back to you as soon as I can.</p>
				</div>
				<div className="divider relative">
					<div id="projects" className="absolute -top-[100px] h-[1px]"></div>
				</div>
				<div className={sectionStyles + "bg-(image:--background-cover) bg-no-repeat bg-center"}>
					<div id="projects-and-skills" className={sectionStyles + "[&>*]:m-[10px] "}>
						<h2>Projects & Skills</h2>
						
						<p className="w-[75%]">Here are some of my skills I&apos;ve accumulated over the years and some of the projects associated with learning them.</p>
						<div className="divider border-t-[1px] w-[75%]"></div>
						<div id="skill-list" className="w-[75%]">
							<div className="flex flex-col lg:flex-row flex-wrap justify-center items-center">
								<SkillTile text="HTML/CSS/JS" type="Language"/>
								<SkillTile text="TypeScript" type="Language"/>
								<SkillTile text="C#" type="Language" />
								<SkillTile text="Java" type="Language" />
								<SkillTile text="React" type="Library"/>
								<SkillTile text="Next.JS/TailwindCSS" type="Framework"/>
								<SkillTile text="API Integration" type="API Related"/>
								<SkillTile text="Git/Github" type="Version Control"/>
								<SkillTile text="Express.js" type="Back-End"/>
								<SkillTile text="Passport/express-session" type="User Auth/Session"/>
								<SkillTile text="PostgreSQL/SQL" type="Database"/>
								<SkillTile text="Data Security/Hacks" type="Data Protection"/>
								<SkillTile text="DevOps" type="Dev Lifecycle"/>
								<SkillTile text="Unity" type="Game Engine" />
							</div>
						</div>
						<div className="divider border-t-[1px] w-[75%]"></div>
						<div id="project-list" className="w-[75%]">
							<div className="flex flex-wrap justify-center">
								<ProjectTile projectTitle="Weather App" 
									projectDesc="This project takes in a specific coordinate or from a pre-set list of locations to choose from main capitals in Canada. It then fetches for the closest weather information to the coordinates and displays in three hour intervals of what the temperature, wind, percipation and cloud coverage will be at that time. It uses an API service called OpenMeteo, an free-to-use API project. The website shows more of the CSS side of my projects with small coloring and animations to help it feel more alive. It was also one of my bigger API use projects" 
									projectImage="/Weather-App.png" projectSkills={["HTML/CSS/JS", "TypeScript", "API Request/Response", "GeoLocation"]} projectLink="https://github.com/SmexyKatarina/weather-app"/>
								<ProjectTile projectTitle="E-Commerce PERN App" 
									projectDesc="This was the final project involved with my Codecademy Course. All knowledge I learned in the course led up to this project. It involved a checkout and cart system, a login/logout system with a functioning register and authentication system. You could add items and remove items from the cart that functioned with a database for categories and items to show. This project was a big step in learning what else, in terms of libraries and different aspects of all the course taught me." 
									projectImage="/projects_bg.jpg" projectSkills={["HTML/CSS/JS", "PostgreSQL", "Database", "Express/Sessions", "Node", "User Authentication/Passport"]} projectLink="https://github.com/SmexyKatarina/e-comm-rest-api"/>
							</div>
						</div>
					</div>
				</div>
				<div id="contact" className={sectionStyles + "bg-[#460526] [&_*]:grow"}>
					<h2 className="max-h-[75px]">Contact Me</h2>
					<form action="https://formspree.io/f/xjkrgjrz" method="POST" className="flex flex-col w-[50%] h-[100%]">
						<input type="text" name="name" placeholder="Name*" required  className={inputStyles + "max-h-[60px]"}/>
						<input type="email" name="email" placeholder="Email Address*" required  className={inputStyles + "max-h-[60px]"}/>
						<textarea name="message" placeholder="Reason for contact or feedback*" required className={inputStyles + "grow"}></textarea>
						<button type="submit" className={inputStyles + "max-h-[60px] min-w-[200px] self-center hover:cursor-pointer"}>Send</button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
