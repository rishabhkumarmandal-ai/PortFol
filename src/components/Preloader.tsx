
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        // Scroll lock
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            onComplete();
            document.body.style.overflow = "unset";
        }, 4000); // Total animation time

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, [onComplete]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
            },
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" as const },
        },
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            textShadow: "0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 40px #22d3ee",
            transition: {
                duration: 0.5,
                type: "spring" as const,
                damping: 12,
                stiffness: 200,
            }
        },
    };

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
            initial="visible"
            animate="visible"
            exit="exit"
            variants={{
                visible: { opacity: 1 },
                exit: { opacity: 0 }
            }}
        >
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative"
            >
                <h1
                    className="text-6xl md:text-9xl font-bold text-[#e0faff]"
                    style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                    {Array.from("Rishabh").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                {/* Glow overlay for extra effect */}
                <motion.div
                    className="absolute inset-0 blur-3xl opacity-20 bg-cyan-500 rounded-full"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.2 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
