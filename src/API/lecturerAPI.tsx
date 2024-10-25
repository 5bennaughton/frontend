import axios from 'axios';
import { useQuery } from 'react-query';
import { LecturerJSON } from './types';


const fetchVenue = async (): Promise<LecturerJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/lecturer");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const LecturerTable = () => {
  const { isLoading, error, data } = useQuery<LecturerJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((lecturer: LecturerJSON) => (
          <tr key={lecturer._links.self.href}> 
            <td>{lecturer.firstName}</td> 
            <td>{lecturer.lastName}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LecturerTable;
