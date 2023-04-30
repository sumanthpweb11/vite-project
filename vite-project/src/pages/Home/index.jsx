import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";

const Home = () => {
  const [selectedComponent, setSelectedComponent] = useState("Button");
  const navigate = useNavigate();
  const components = [
    {
      name: "Button",
      path: "button",
    },
    {
      name: "Input",
      path: "input",
    },
    {
      name: "Select",
      path: "select",
    },
    {
      name: "Header",
      path: "header",
    },
    {
      name: "Spinner",
      path: "spinner",
    },
    {
      name: "Card",
      path: "card",
    },
    {
      name: "Tabs",
      path: "tabs",
    },
    {
      name: "Table",
      path: "table",
    },
    {
      name: "Modal",
      path: "modal",
    },
    {
      name: "Autocomplete",
      path: "autocomplete",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  ">
      {/* navbar */}
      <div className="flex-3 md:fixed max-w-[100vh] md:h-screen bg-primary  ">
        <h1 className="text-2xl  text-white font-bold px-7 my-10">
          Components
        </h1>
        <div className="flex flex-col gap-2 px-5 ">
          {components.map((component) => {
            return (
              <div
                key={component.name}
                onClick={() => {
                  setSelectedComponent(component.name);
                  navigate(`/${component.path}`);
                }}
                className={classNames(
                  "cursor-pointer px-5 py-2 transition text-white",
                  {
                    "border border-white rounded bg-white":
                      window.location.pathname === `/${component.path}`,
                  }
                )}
              >
                <span
                  className={classNames(" ", {
                    "text-gray-900 ":
                      window.location.pathname === `/${component.path}`,
                  })}
                >
                  {component.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* selected component */}
      <div className=" p-10   w-full flex flex-7  flex-col gap-5  items-start md:ml-52 ">
        <h1 className="text-2xl text-primary font-bold">{selectedComponent}</h1>
        <hr className="bg-gray-900 w-full" />
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
