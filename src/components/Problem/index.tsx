"use client";

import { motion, useInView } from "framer-motion";
import SectionIntro from "../SectionIntro";
import { useRef } from "react";

const Problem: React.FC = () => {
  const container = useRef(null);
  const ref = useRef(null);
  useInView(ref, { root: container });
  return (
    <div ref={container}>
      {/* <section>
        <SectionIntro text="But there is a problem..." />
      </section> */}
      <motion.section
        ref={ref}
        className="flex flex-col items-center justify-center xs:px-4 px-8 gap-7"
        initial={{ opacity: 0, x: -500 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: 1 },
        }}
      >
        <SectionIntro text="But there is a problem..." />
        <p className="text-center md:text-3xl text-2xl xs:text-sm font-thin">
          In today&apos;s <span className={""}>competitive market</span>,{" "}
          <span className={"text-orange-500"}>
            an underwhelming online presence{" "}
          </span>
          can be a business&apos;s downfall.
        </p>

        <p className="text-center md:text-3xl text-2xl xs:text-sm font-thin">
          Without a <span className={""}>highly converting</span> landing page,
          potential customers slip through the cracks, and{" "}
          <span className={"text-orange-500"}>
            revenue opportunities are missed.
          </span>
        </p>
        <p className="text-center text-2xl xs:text-sm md:text-3xl font-thin">
          A compelling landing page is not just a luxury;{" "}
          <span className={"text-orange-500"}>
            it&apos;s a necessity for sustained growth.
          </span>
        </p>
      </motion.section>
    </div>
  );
};
export default Problem;
