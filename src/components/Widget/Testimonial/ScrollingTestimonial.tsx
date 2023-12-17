import { useRef, useState, useLayoutEffect, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useTransform, useSpring, useScroll, useInView, useMotionValueEvent } from "framer-motion";
import { ITestimonial } from "@/contentrain/Homepage";

interface ScrollingTestimonialProps {
  data: ITestimonial[];
}

const ScrollingTestimonial: React.FC<ScrollingTestimonialProps> = ({ data }) => {
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
          className={`scroll-container will-change-transform overflow-hidden ${
            fixeElement ? "mb-16 md:mb-0" : "mb-0"
          } ${fixeElement ? "mt-0 md:mt-16" : "mt-0"}`}
          ref={ref}
          style={{
            height: "calc(100vh - 4rem)",
            position: fixeElement ? "fixed" : "relative",
            // marginTop: fixeElement ? "4rem" : "0",
            // marginBottom: fixeElement ? "4rem" : "0",
            top: fixeElement ? "0" : isAfter ? `calc(${scrollRange}px - (100vh - 4rem))` : "0",
          }}
        >
          <motion.section
            ref={scrollRef}
            style={{ x: spring, height: "calc(100vh - 4rem)" }}
            className="relative w-max flex items-center px-64"
          >
            <div className="flex items-center space-x-12" ref={contentRef}>
              {data
                .sort((t1: ITestimonial, t2: ITestimonial) => t1.ordre - t2.ordre)
                .map((testimonial: ITestimonial) => (
                  <div className="w-72  space-y-4">
                    <img src={testimonial.image} className="h-fit rounded-xl" />
                    <div className="h-full space-y-4 flex flex-col justify-between">
                      <p
                        className="text-center text-sm"
                        dangerouslySetInnerHTML={{ __html: testimonial.description }}
                      ></p>
                      <p className="text-end text-gray-400 " style={{ fontVariant: "small-caps" }}>
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default ScrollingTestimonial;
