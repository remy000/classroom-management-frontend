export const DEPARTMENTS = [
   'Computer Science',
   'Mathematics',
   'Physics',
   'Chemistry',
   'Biology',
   'History',
   'Geography',
   'English Literature',
   'Economics',
   'Psychology',
];
export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
   label: dept,
   value: dept.toLowerCase()
}));