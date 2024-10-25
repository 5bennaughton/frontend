import axios from 'axios';
import { useQuery } from 'react-query';
import { CourseJSON } from './types';


const fetchVenue = async (): Promise<CourseJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/lecturer");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const CourseTable = () => {
  const { isLoading, error, data } = useQuery<CourseJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((course: CourseJSON) => (
          <tr key={course._links.self.href}> 
            <td>{course.courseCode}</td> 
            <td>{course.modules}</td> 
            //TODO link foregin key
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
