import React, { useState } from "react";
import Tabs from "./Component";

const index = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col gap-5 items-start w-full">
      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Active</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[
            <>
              <h1>Tab 1</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae in excepturi nemo voluptas non accusantium. Earum illo
              exercitationem porro accusantium?
            </>,
            <>
              <h1>Tab 2</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, officiis quis enim deserunt obcaecati facilis illo
              aliquam itaque sed autem?
            </>,
            <>
              Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga libero excepturi quibusdam quasi eaque velit voluptatibus
              perferendis modi, ex illo.
            </>,
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="active-tabs"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Outlined</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[
            <>
              <h1>Tab 1</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae in excepturi nemo voluptas non accusantium. Earum illo
              exercitationem porro accusantium?
            </>,
            <>
              <h1>Tab 2</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, officiis quis enim deserunt obcaecati facilis illo
              aliquam itaque sed autem?
            </>,
            <>
              Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga libero excepturi quibusdam quasi eaque velit voluptatibus
              perferendis modi, ex illo.
            </>,
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="outlined"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Vertical Active</span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[
            <>
              <h1>Tab 1</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae in excepturi nemo voluptas non accusantium. Earum illo
              exercitationem porro accusantium?
            </>,
            <>
              <h1>Tab 2</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, officiis quis enim deserunt obcaecati facilis illo
              aliquam itaque sed autem?
            </>,
            <>
              Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga libero excepturi quibusdam quasi eaque velit voluptatibus
              perferendis modi, ex illo.
            </>,
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="active-vertical"
          orientation="vertical"
        />
      </div>

      <div className="p-5 border border-gray-300 w-full flex flex-col gap-5">
        <span>Outlined Vertical </span>
        <Tabs
          tabNames={["Tab 1", "Tab 2", "Tab 3"]}
          tabContents={[
            <>
              <h1>Tab 1</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae in excepturi nemo voluptas non accusantium. Earum illo
              exercitationem porro accusantium?
            </>,
            <>
              <h1>Tab 2</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Sapiente, officiis quis enim deserunt obcaecati facilis illo
              aliquam itaque sed autem?
            </>,
            <>
              Tab 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fuga libero excepturi quibusdam quasi eaque velit voluptatibus
              perferendis modi, ex illo.
            </>,
          ]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          variant="outlined-vertical"
          orientation="vertical"
        />
      </div>
    </div>
  );
};

export default index;
