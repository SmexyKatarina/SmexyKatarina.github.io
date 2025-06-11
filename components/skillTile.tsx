export default function SkillTile({ text, type }: { text: string, type: string }) {
    
    
    return (
        <div className="w-[100%] lg:w-[49%] text-left duration-300 transition-all hover:bg-position-[-100%] bg-(image:--skill-tile) bg-size-[200%] m-[5px] p-[10px] text-[1.2rem] grow h-[50px] md:active:bg-position-[-100%]">
            <p>&gt; {text} <span className="text-[15px] text-gray-400">({type})</span></p>
        </div>
    );
}