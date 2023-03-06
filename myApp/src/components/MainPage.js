import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { AccordionData } from "../data/AccordionData";

const MainPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);


const handleClick = (index) => {
  setActiveIndex(activeIndex ===index? null : index);
}
  return (
    <React.Fragment>
      <main>
        <div className="mt-20 mx-2 md:w-5/12 md:mx-auto">
          {/* header section */}
          <div className=" h-20 bg-yellow-400  centered">
            <p className="text-4xl capitalize font-bold">
              Undergraduate application
            </p>
          </div>

          {/* accordion title */}
          <div>
            {AccordionData.map((item, index) => {
              return (
                <div key={index}>
                  <div 
                  onClick={() =>handleClick(index)}
                  className=" h-20 bg-white border-yellow-400 border-2 flex justify-between items-center px-5 border-t-0">
                    <div>
                      <p className="text-3xl font-semibold ">{item.title}</p>
                    </div>
                    <div className="text-2xl text-yellow-500">
                      { activeIndex === index ? <FaMinus /> : <FaPlus /> }
                    </div>
                  </div>

                  {/* content section */}
                  <div>
                    {
                      activeIndex === index &&
                      <div className="border-2 border-yellow-400 border-t-0">
                      <p className="px-3 py-3">{item.content}</p>
                    </div>
                    }
                   
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
