"use client";

import { useState } from "react";
import CategoryList from "./categoryList";
import { AnimatePresence,motion } from "motion/react";

export default function Sidebar_Speciatly() {
  const [showfilterbtn, setShowFilterbtn] = useState<boolean>(false);
  
  return (
    <aside className="space-y-3">
      <div className="max-sm:block hidden space-y-2">
        <h2>Browse through the doctors specialist.</h2>
        <button
          type="button"
          onClick={() => setShowFilterbtn((prev) => !prev)}
          className={`border border-gray-300 rounded-md w-fit py-1 px-5 ${ showfilterbtn ? "bg-sky-600 border-sky-600" : ""}`}
          >
          Filter
        </button>
      </div>
     <AnimatePresence mode="wait">
       {
        showfilterbtn && (
          <motion.div
          initial ={{opacity:0,height:0}}
          animate={{opacity:1,height:"auto"}}
          exit={{opacity:0,height:0}}
          transition={{duration:0.3,ease:"easeInOut"}}
          className="grid grid-cols-1 min-[350px]:max-[500px]:grid-cols-2 min-[500px]:max-sm:grid-cols-3 gap-4 z-50 border rounded-lg px-4 py-5  sm:hidden"
          >
            <CategoryList />
          </motion.div>
        )
      }
     </AnimatePresence>
      <div className="hidden sm:flex flex-col gap-y-4">
        <CategoryList/>
      </div>
    </aside>
  );
}
