import Link from "next/link";

export default function Footer() {
    return (
        <div id="footer" className="flex p-[10px] justify-around text-gray-400 text-[0.85rem] w-full bg-black border-t-[1px] border-teal-700">
            <p className="">© {new Date(Date.now()).getFullYear()} Titus Mercier-Hachey</p>
            <Link href="#top">Back to the top</Link>
            <Link className="mr-[10px]" href="https://github.com/smexykatarina/smexykatarina.github.io" rel="noreferrer noopener" target="_blank">See the code here</Link>
        </div>
    );
}