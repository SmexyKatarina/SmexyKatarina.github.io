import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";
import ListObject from "../../components/listObject";

export default function HomePage() {

	const sectionStyles = "flex flex-col items-center w-screen min-h-[600px] text-center [&_h2]:text-[2rem] [&_h3]:text-[1.75rem] [&>h2~p]:text-[1.25rem] ";

	const inputStyles = "m-[10px] p-[10px] border-[2px] rounded-sm text-white placeholder:text-gray-400 focus:outline-2 focus:outline-offset-3 focus:outline-blue-400 "

	return (
		<div id="top" className="w-screen h-screen">
			<Header />
			<main id="content" className="mt-20px [&>div:not(.divider)]:p-[20px]">
				<div className="divider relative">
					<div id="about" className="absolute -top-[100px] h-[1px]"></div>
				</div>
				<div className={sectionStyles + "w-full bg-gray-800 [&>*]:m-[10px] [&>*]:w-[70%]"}>
					<h2>About Me</h2>
					<p>Im an aspiring software, website and modding developer. I have taken programming as a passion when I was younger, experimenting on various different little projects. During 2020, I took the time to delve into modding games and ended up finding back the spark to continue the journey. Started a full-stack course in 2023 and finished it in 2024 and now trying to get into the market.</p>
					<p>This is a website dedicated to show my experience and what I've made over the years. Now that this is a more serious part of my life, Im trying to improve my skills every day and hopefully become a freelance in the future.</p>
					<p>If you're interested in talking with me, <Link href="#contact" className="text-[#5588DD] underline underline-offset-2">contact me</Link> and ill get back to you as soon as I can.</p>
				</div>
				<div className="divider relative">
					<div id="projects" className="absolute -top-[100px] h-[1px]"></div>
				</div>
				<div className={sectionStyles + "bg-(image:--blend-color) bg-no-repeat bg-center"}>
					<div id="projects-and-skills" className={sectionStyles + "[&>*]:m-[10px] "}>
						<h2>Projects & Skills</h2>
						
						<p className="w-[75%]">Here are some of my skills I've accumulated over the years and some of the projects associated with learning them.</p>
						<div className="divider border-t-[1px] w-[75%]"></div>
						<div id="skill-list" className="w-[75%]">
							<div className="flex flex-wrap justify-center items-center">
								<ListObject text="HTML/CSS/JS" type="Language"/>
								<ListObject text="TypeScript" type="Language"/>
								<ListObject text="C#" type="Language" />
								<ListObject text="Java" type="Language" />
								<ListObject text="React" type="Library"/>
								<ListObject text="Next.JS/TailwindCSS" type="Framework"/>
								<ListObject text="API Integration" type="API Related"/>
								<ListObject text="Git/Github" type="Version Control"/>
								<ListObject text="Express.js" type="Back-End"/>
								<ListObject text="Passport/express-session" type="User Auth/Session"/>
								<ListObject text="PostgreSQL/SQL" type="Database"/>
								<ListObject text="Data Security/Hacks" type="Data Protection"/>
								<ListObject text="DevOps" type="Dev Lifecycle"/>
								<ListObject text="Unity" type="Graphics Engine" />
							</div>
						</div>
						<div id="project-list">
							{/** projects time :) */}
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
