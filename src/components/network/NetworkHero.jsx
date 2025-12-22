import { motion } from 'framer-motion';

const NetworkHero = () => {
    return (
        <>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] tracking-[0.5em] text-accent font-bold uppercase mb-8"
            >
                ABOUT
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-16 uppercase">
                Meet The <br /> Network
            </h1>

            <div className="border-t border-white/5 pt-24">
                <p className="text-xl font-light leading-loose text-white/60 mb-24 max-w-4xl uppercase">
                    SHEIKH NABEEL IS NOT JUST A CONSULTANCY; IT IS A GLOBAL COLLECTIVE OF C-SUITE VETERANS AND INDUSTRY PIONEERS.
                </p>
            </div>
        </>
    );
};

export default NetworkHero;
