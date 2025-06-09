export default function ListObject({ text, type }: { text: string, type: string }) {
    
    
    return (
        <div className="w-[40%] text-left bg-linear-to-r from-[#051851] from-[40%] to-[#1d54fd] m-[5px] p-[10px] text-[1rem] grow">
            <p>&gt; {text} <span className="text-[14px] text-gray-400">({type})</span></p>
        </div>
    );
}