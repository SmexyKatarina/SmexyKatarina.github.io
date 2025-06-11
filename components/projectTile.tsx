'use client'

export default function ProjectTile({ projectTitle, projectDesc, projectImage, projectSkills, projectLink }: { projectTitle: string, projectDesc: string, projectSkills: string[], projectImage: string, projectLink: string}) {
    return (
        <div className="flex flex-col justify-between min-h-[200px] w-[100%] lg:w-[47%] m-[10px] duration-300 transition-all bg-size-[200%] hover:text-red-200 hover:bg-position-top bg-(image:--project-tile)" onClick={() => { window.open(projectLink, "_blank", "noopener,noreferrer")}}>
            <div className="bg-cover bg-center bg-no-repeat h-[200px] flex justify-center items-center" style={{ backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('" + projectImage + "')"}}>
                <div className="flex flex-col items-center">
                    <h4 className="text-[1.6rem]">{projectTitle}</h4>
                    <p className="italic w-[80%]">{projectSkills && projectSkills.filter(x => x).length >= 1 ? "Skills Used: " + projectSkills.join(", ") : "Skills used: None"}</p>
                </div>
            </div>
            <p className="m-[20px] text-[1.2rem]">{projectDesc}</p>
            <div className="m-[20px] justify-self-end">
                <p className="text-[0.9rem] justify-self-end underline underline-offset-3">Click to see code →</p>
            </div>
        </div>
    );
}