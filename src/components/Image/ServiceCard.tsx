import { Service } from "@/data/Service";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface ServiceProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceProps> = ({ service }) => {
  const [displayDesc, setDisplayDesc] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col items-center text-center"
      onMouseLeave={() => setDisplayDesc(false)}
      onMouseOver={() => setDisplayDesc(true)}
    >
      <img src={service.image} />
      <div className="space-y-4 w-full">
        <hr className="my-6 border-gray-500 w-full" />
        <h4 className="text-2xl">{service.title}</h4>
        <AnimatePresence>
          {displayDesc && (
            <motion.p
              key="description"
              initial={{ y: -50, opacity: 0, height: 0 }}
              animate={{ y: 0, opacity: 1, height: "auto" }}
              transition={{ duration: 0.2, delay: 0.2 }}
              exit={{ y: -50, opacity: 0, transition: { duration: 0.2 }, height: 0 }}
            >
              {service.description}
            </motion.p>
          )}
          <motion.hr className="border-gray-500 w-full" />
        </AnimatePresence>
      </div>
    </div>
  );
};
