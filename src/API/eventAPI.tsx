import axios from 'axios';
import { useQuery } from 'react-query';
import { EventJSON } from './types';


const fetchVenue = async (): Promise<EventJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/lecturer");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const StudentTable = () => {
  const { isLoading, error, data } = useQuery<EventJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((event: EventJSON) => (
          <tr key={event._links.self.href}> 
            <td>{event.semester}</td> 
            <td>{event.startTime}</td> 
            <td>{event.moduleCode}</td> 
            // TODO add staffID number here 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
