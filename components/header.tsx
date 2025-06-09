import Link from "next/link";

export default function Header() {

    const navClass: string = "border-l-[1px] border-teal-700 h-[100%] flex justify-center grow items-center";
    const navArray: string[] = [ "About", "Projects", "Contact" ];

    return (
        <div id="header" className="sticky top-[0] bg-black z-100 flex justify-between text-[1.4rem] w-screen h-[50px]">
            <h1 className="pl-[10px] self-center">Titus M.H</h1>
            <div className="flex justify-around text-[1.1rem] w-[25rem]">
                {navArray.map((navValue, index) => {
                    return <Link key={index} href={"#" + navValue.toLowerCase()} className={navClass}>{navValue}</Link>;
                })}
            </div>
        </div>
    );
}