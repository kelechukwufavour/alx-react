// schema/courses.js
import { schema, normalize } from 'normalizr';

// Define the course schema
const courseSchema = new schema.Entity('courses');

// Define the normalization function
export const coursesNormalizer = (data) => normalize(data, [courseSchema]);

// Export the course schema and the normalization function
export { courseSchema, coursesNormalizer };
