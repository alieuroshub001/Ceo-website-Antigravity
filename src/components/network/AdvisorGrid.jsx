
const AdvisorGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-black p-12 border border-white/5 group hover:bg-white/5 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-white/10 mb-8 transition-all duration-500 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Partner" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="text-xs tracking-[0.3em] font-bold text-white mb-2 uppercase">ADVISOR {i}</h4>
                    <p className="text-[10px] tracking-widest text-white/40 uppercase mb-6 italic">EXECUTIVE PARTNER</p>
                    <p className="text-[11px] font-light text-white/30 leading-relaxed uppercase">
                        Specialist in digital leadership and global organizational resilience.
                    </p>
                </div>
            ))}
        </div>
    );
};

export default AdvisorGrid;
