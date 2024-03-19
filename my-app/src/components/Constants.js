import { v4 as uuidv4 } from "uuid";
import {
  ChatRight,
  Kanban,
  Motherboard,
  Telephone,
} from "react-bootstrap-icons";

export const SCREEN = {
  SCREEN_WEEK: "SCREEN_WEEK",
  SCREEN_MONTH: "SCREEN_MONTH",
};

export function CreateMeetingTemplate() {
  let result = {
    name: "New meeting",
    typeMeeting: {
      background: "122, 89, 240, 0.3",
      color: "122, 89, 240, 1",
      name: "Project meeting",
    },
    Date: [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ],
    timeStart: timeStart(),
    timeEnd: timeEnd(),
    location: "",
    description: "",
    key: uuidv4(),
    completed: false,
  };
  return result;
}

export const MeetingStart = [
  {
    name: "Test Meeting",
    typeMeeting: {
      background: "122, 89, 240, 0.3",
      color: "122, 89, 240, 1",
      name: "Project meeting",
    },
    Date: [
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate(),
    ],
    timeStart: timeStart(),
    timeEnd: timeEnd(),
    location: "Here",
    description: "you need to study the program",
    key: uuidv4(),
    completed: false,
  },
];

export const MeetingItems = [
  {
    icon: <Kanban />,
    name: "Project meeting",
    background: "122, 89, 240, 0.3",
    color: "122, 89, 240, 1",
  },
  {
    icon: <ChatRight />,
    name: "Meeting",
    background: "9, 179, 196, 0.3",
    color: "9, 179, 196, 1",
  },
  {
    icon: <Telephone />,
    name: "Call",
    background: "238, 149, 21, 0.3",
    color: "238, 149, 21, 1",
  },
  {
    icon: <Motherboard />,
    name: "Other",
    background: "255, 88, 99, 0.3",
    color: "255, 88, 99, 1",
  },
];

function timeStart() {
  const dateAndTime = new Date();
  const start = dateAndTime.getHours();
  const end = dateAndTime.getMinutes();
  return [start, end];
}
function timeEnd() {
  const dateAndTime = new Date();
  const start = dateAndTime.getHours() + 1;
  const end = dateAndTime.getMinutes();
  return [start, end];
}
