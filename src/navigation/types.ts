export type RootStackParamList = {
  MainTabs: undefined;
  CourseDetails: { courseId: string };
  LecturePlayer: { courseId: string; subjectId: string; lectureId: string };
};

export type MainTabParamList = {
  Home: undefined;
  Courses: undefined;
  Downloads: undefined;
  Profile: undefined;
};
