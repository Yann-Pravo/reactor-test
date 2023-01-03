import * as yup from "yup";

export const addCommentSchema = yup.object().shape({
  mood: yup.string(),
  text: yup.string().required(),
  user: yup.string().required(),
});
