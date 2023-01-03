import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import AddComment from "../AddComment";
import Comment from "../../types/comment";
import { formatDate, getMoodIcon } from "./helpers";
import classNames from "classnames";
import {
  MinusCircleIcon,
  UserCircleIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/20/solid";

interface ChatProps {
  comments: Comment[];
  addComment: (comment: Comment) => void;
  removeComment: (commentId: string) => void;
  user: string;
  changeUser: () => void;
}

const Chat: React.FC<ChatProps> = ({
  comments,
  addComment,
  removeComment,
  user,
  changeUser,
}) => (
  <div className="w-full max-w-sm px-4 mt-8">
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="relative rounded-md bg-black px-1 py-1 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 text-opacity-90">
            <div className="absolute flex top-1 right-1">
              {comments.length > 0 && (
                <div className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {comments.length}
                </div>
              )}
            </div>
            <ChatBubbleOvalLeftIcon className="h-10 w-10" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative bg-white p-7 space-y-2">
                  {comments.map(({ id, date, value, reaction, user }) => {
                    const mood = getMoodIcon(reaction);
                    const MoodIcon = mood?.icon;

                    return (
                      <div
                        key={id}
                        className="group -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className={classNames("p-1 rounded-xl", user)}>
                          <UserCircleIcon className="h-8 w-8 text-white" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm text-gray-400 mb-1">
                            {formatDate(date)}
                          </p>
                          <div className="flex items-center">
                            {mood && (
                              <div
                                className={classNames(
                                  "w-5 h-5 rounded-full flex items-center justify-center mr-2",
                                  mood.bgColor
                                )}
                              >
                                <MoodIcon
                                  className="text-white flex-shrink-0 h-3 w-3"
                                  aria-hidden="true"
                                />
                              </div>
                            )}
                            <div className="text-sm font-medium text-gray-700">
                              {value}
                            </div>
                          </div>
                        </div>
                        <MinusCircleIcon
                          onClick={() => removeComment(id)}
                          className="group-hover:text-red-500 text-white cursor-pointer flex-shrink-0 h-5 w-5 ml-auto"
                          aria-hidden="true"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="bg-[#65b7e5] p-4">
                  <AddComment
                    onPost={addComment}
                    user={user}
                    changeUser={changeUser}
                  />
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </div>
);

export default Chat;
