import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/20/solid";
import Mood from "../../types/mood";

export const moods: Mood[] = [
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

export const getMoodIcon = (mood: string) => {
  const findMood = moods.find(({ value }) => value === mood);

  if (!findMood) return null;
  return findMood;
};

export const formatDate = (date: Date) => {
  if (!date) return null;

  const formattedDate = new Date(date);
  return `${formattedDate.getDate()}/${
    formattedDate.getMonth() + 1
  }/${formattedDate.getFullYear()} ${formattedDate.getHours()}:${formattedDate.getMinutes()}`;
};
