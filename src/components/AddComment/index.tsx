import { UserCircleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
import { t } from "i18next";
import { moods } from "../Chat/helpers";
import Comment from "../../types/comment";
import { useFormik } from "formik";

interface AddCommentProps {
  onPost: (comment: Comment) => void;
  user: string;
  changeUser: () => void;
}

const AddComment: React.FC<AddCommentProps> = ({
  onPost,
  user,
  changeUser,
}) => {
  const {
    handleSubmit,
    handleChange,
    setFieldValue,
    resetForm,
    values: { mood, text },
  } = useFormik({
    enableReinitialize: true,
    initialValues: {
      mood: "",
      text: "",
      user,
    },
    onSubmit: () => {
      const date = new Date();

      onPost({
        id: String(date.getTime()),
        date,
        reaction: mood,
        value: text,
        user,
      });

      resetForm();
    },
  });

  return (
    <div className="flex items-start space-x-4">
      <div
        className={classNames("p-1 rounded-xl cursor-pointer", user)}
        onClick={changeUser}
      >
        <UserCircleIcon className="h-8 w-8 text-white" />
      </div>
      <div className="min-w-0 flex-1">
        <form onSubmit={handleSubmit} className="relative">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-[#00e0b7] focus-within:ring-1 focus-within:ring-[#00e0b7]">
            <textarea
              rows={3}
              name="text"
              id="text"
              onChange={handleChange}
              className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
              placeholder={t("add-your-comment") || ""}
              value={text}
            />

            <div className="flex justify-between py-2 pl-3 pr-2 bg-slate-200">
              <div className="flex items-center space-x-5">
                {moods.map(({ value, bgColor, icon: Icon }) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setFieldValue("mood", value)}
                    className={classNames(
                      mood === value ? bgColor : "bg-gray-500",
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

export default AddComment;
