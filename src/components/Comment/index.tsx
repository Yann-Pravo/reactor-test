import { useState } from "react";
import {
  UserCircleIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import classNames from "classnames";
import { t } from "i18next";

const moods = [
  {
    value: "love",
    icon: HeartIcon,
    bgColor: "bg-pink-400",
  },
  {
    value: "thumbs-up",
    icon: HandThumbUpIcon,
    bgColor: "bg-blue-500",
  },
  {
    value: "thumbs-down",
    icon: HandThumbDownIcon,
    bgColor: "bg-red-500",
  },
];

const Comment: React.FC = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex items-start space-x-4">
      <div className="p-1 bg-red-500 rounded-xl">
        <UserCircleIcon className="h-8 w-8 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <form action="#" className="relative">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-[#00e0b7] focus-within:ring-1 focus-within:ring-[#00e0b7]">
            <textarea
              rows={3}
              name="comment"
              id="comment"
              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
              placeholder={t("add-your-comment") || ""}
              defaultValue={""}
            />

            <div className="flex justify-between py-2 pl-3 pr-2 bg-slate-200">
              <div className="flex items-center space-x-5">
                {moods.map(({ value, bgColor, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setSelected(value)}
                    className={classNames(
                      selected === value ? bgColor : "bg-gray-500",
                      "w-8 h-8 rounded-full flex items-center justify-center"
                    )}
                  >
                    <Icon
                      className="text-white flex-shrink-0 h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
              <div className="flex-shrink-0">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-[#00e0b7] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#805afe] focus:outline-none focus:ring-2 focus:ring-[#00e0b7] focus:ring-offset-2"
                >
                  {t("post")}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
