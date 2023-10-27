import { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useSpring, useScroll, useInView, useMotionValueEvent } from "framer-motion";

const SmoothScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);

    const [isBefore, setIsBefore] = useState<boolean>(false);
    const [fixeElement, setFixeElement] = useState<boolean>(false);
    const [isAfter, setIsAfter] = useState<boolean>(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 1 });

    /* Pour terminer le Scroll */
    const contentRef = useRef<HTMLDivElement>(null);
    // const { scrollXProgress } = useScroll({ container: contentRef });
    // console.log(scrollXProgress)

    useLayoutEffect(() => {
        scrollRef && scrollRef.current && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries: any) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries));
        if (ghostRef && ghostRef.current) resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const { scrollYProgress } = useScroll({ target: ghostRef });
    const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW]);
    const physics = { damping: 15, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    useEffect(() => {
        if (!isBefore && !isAfter && isInView) setFixeElement(true);
    }, [fixeElement, setFixeElement, isInView]);

    useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
        if (latest == 0) setIsBefore(true);
        else setIsBefore(false);

        if (latest == 1) setIsAfter(true);
        else setIsAfter(false);

        if (latest > 0 && latest < 1) setFixeElement(true);
        else setFixeElement(false);
    });
    return (
        <>
            <div ref={ghostRef} style={{ height: scrollRange }}>
                <div
                    className="scroll-container will-change-transform overflow-hidden"
                    ref={ref}
                    style={{
                        height: "calc(100vh - 4rem)",
                        position: fixeElement ? "fixed" : "relative",
                        marginTop: fixeElement ? "4rem" : "0",
                        top: fixeElement ? "0" : isAfter ? `calc(${scrollRange}px - (100vh - 4rem))` : "0",
                    }}
                >
                    <motion.section
                        ref={scrollRef}
                        style={{ x: spring, height: "calc(100vh - 4rem)" }}
                        className="relative w-max flex items-center bg-ternary px-64"
                    >
                        <div className="flex items-center space-x-12" ref={contentRef}>
                            <img src="https://loremflickr.com/640/660" className="w-full h-fit" />
                            <img src="https://placekitten.com/640/360" className="w-full h-fit" />
                            <img src="https://placebeard.it/740x460" className="w-full h-fit" />
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    );
};

export default SmoothScroll;
