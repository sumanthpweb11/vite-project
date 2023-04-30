import classNames from "classnames";
import React from "react";

const Tabs = ({
  tabNames,
  tabContents,
  activeTab,
  setActiveTab,
  variant = "active-tabs",
  orientation = "horizontal",
}) => {
  return (
    <div
      className={classNames("flex", {
        "flex-row gap-10": orientation === "vertical",
        "flex-col": orientation === "horizontal",
      })}
    >
      <div
        className={classNames("flex flex-row gap-10 border-b border-gray-300", {
          "flex-col ": orientation === "vertical",
        })}
      >
        {tabNames.map((tabName, index) => {
          return (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              //className="cursor-pointer "
              className={classNames("cursor-pointer p-2", {
                "bg-primary text-white rounded-sm transition ":
                  activeTab === index &&
                  variant === "active-tabs" &&
                  orientation === "horizontal",

                "border border-primary text-gray-900 rounded-sm transition ":
                  activeTab === index &&
                  variant === "outlined" &&
                  orientation === "horizontal",

                "bg-primary whitespace-nowrap text-white rounded-sm transition ":
                  activeTab === index &&
                  variant === "active-vertical" &&
                  orientation === "vertical",

                "border whitespace-nowrap border-primary text-gray-900 rounded-sm transition ":
                  activeTab === index &&
                  variant === "outlined-vertical" &&
                  orientation === "vertical",
              })}
            >
              {tabName}
            </div>
          );
        })}
      </div>

      {/* Tab Content based on Index */}
      <div className="mt-5">{tabContents[activeTab]}</div>
    </div>
  );
};

export default Tabs;
