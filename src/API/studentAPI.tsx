import axios from 'axios';
import { useQuery } from 'react-query';
import { StudentJSON } from './types';


const fetchVenue = async (): Promise<StudentJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/lecturer");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const StudentTable = () => {
  const { isLoading, error, data } = useQuery<StudentJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((student: StudentJSON) => (
          <tr key={student._links.self.href}> 
            <td>{student.firstName}</td> 
            <td>{student.lastName}</td> 
            // TODO add staffID number here 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
