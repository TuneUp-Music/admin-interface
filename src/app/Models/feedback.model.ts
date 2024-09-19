export interface Feedback {
  id: string;
  feedbacks: { [key in feedbackTypes]: number };
  author: string;
  role: string;
  status: feedbackStatus;
  date: Date;
}

export enum feedbackTypes {
  UI = "UI",
  UX = "UX",
  BUGS = "Bugs",
  RECOMMEND = "Would recommend the app",
}

export enum feedbackStatus {
  PENDING = "Pending",
  RESOLVED = "Resolved",
}
