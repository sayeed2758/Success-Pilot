export type Lecture = {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isFree?: boolean;
};

export type Subject = {
  id: string;
  title: string;
  lectures: Lecture[];
};

export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  totalLectures: number;
  totalSubjects: number;
  featured?: boolean;
  subjects: Subject[];
};

const SAMPLE_VIDEO =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export const courses: Course[] = [
  {
    id: 'ctet-2026',
    title: 'CTET Complete Preparation',
    category: 'Teaching Exams',
    description:
      'A structured preparation course with subject-wise lectures and practice-oriented learning.',
    thumbnail:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    totalLectures: 18,
    totalSubjects: 4,
    featured: true,
    subjects: [
      {
        id: 'cdp',
        title: 'Child Development & Pedagogy',
        lectures: [
          { id: 'cdp-1', title: 'Introduction to Child Development', duration: '12:40', videoUrl: SAMPLE_VIDEO, isFree: true },
          { id: 'cdp-2', title: 'Learning & Development Concepts', duration: '18:25', videoUrl: SAMPLE_VIDEO },
          { id: 'cdp-3', title: 'Theories of Learning', duration: '21:10', videoUrl: SAMPLE_VIDEO },
        ],
      },
      {
        id: 'math',
        title: 'Mathematics',
        lectures: [
          { id: 'math-1', title: 'Number System Basics', duration: '16:32', videoUrl: SAMPLE_VIDEO, isFree: true },
          { id: 'math-2', title: 'Percentage — Part 1', duration: '24:15', videoUrl: SAMPLE_VIDEO },
          { id: 'math-3', title: 'Percentage — Part 2', duration: '26:40', videoUrl: SAMPLE_VIDEO },
        ],
      },
      {
        id: 'evs',
        title: 'Environmental Studies',
        lectures: [
          { id: 'evs-1', title: 'EVS Learning Framework', duration: '14:05', videoUrl: SAMPLE_VIDEO },
          { id: 'evs-2', title: 'Food & Shelter', duration: '19:45', videoUrl: SAMPLE_VIDEO },
        ],
      },
      {
        id: 'language',
        title: 'Language & Pedagogy',
        lectures: [
          { id: 'lang-1', title: 'Language Acquisition', duration: '17:20', videoUrl: SAMPLE_VIDEO },
          { id: 'lang-2', title: 'Teaching Reading Skills', duration: '22:10', videoUrl: SAMPLE_VIDEO },
        ],
      },
    ],
  },
  {
    id: 'otet-2026',
    title: 'OTET Preparation',
    category: 'Odisha Exams',
    description:
      'Focused lessons for OTET preparation with a clear subject-wise course structure.',
    thumbnail:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    totalLectures: 12,
    totalSubjects: 3,
    subjects: [
      {
        id: 'otet-pedagogy',
        title: 'Pedagogy',
        lectures: [
          { id: 'otet-p-1', title: 'Pedagogy Fundamentals', duration: '15:30', videoUrl: SAMPLE_VIDEO, isFree: true },
          { id: 'otet-p-2', title: 'Classroom Learning', duration: '18:18', videoUrl: SAMPLE_VIDEO },
        ],
      },
      {
        id: 'otet-odia',
        title: 'Odia Language',
        lectures: [
          { id: 'otet-o-1', title: 'Odia Grammar Basics', duration: '20:10', videoUrl: SAMPLE_VIDEO },
          { id: 'otet-o-2', title: 'Comprehension Practice', duration: '22:30', videoUrl: SAMPLE_VIDEO },
        ],
      },
      {
        id: 'otet-math',
        title: 'Mathematics',
        lectures: [
          { id: 'otet-m-1', title: 'Arithmetic Fundamentals', duration: '19:05', videoUrl: SAMPLE_VIDEO },
          { id: 'otet-m-2', title: 'Algebra Basics', duration: '23:15', videoUrl: SAMPLE_VIDEO },
        ],
      },
    ],
  },
];
