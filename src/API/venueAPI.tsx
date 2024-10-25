import axios from 'axios';
import { useQuery } from 'react-query';
import { VenueJSON } from './types';


const fetchVenue = async (): Promise<VenueJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/courses");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const VenueTable = () => {
  const { isLoading, error, data } = useQuery<VenueJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((venue: VenueJSON) => (
          <tr key={venue._links.self.href}> 
            <td>{venue.roomNo}</td> 
            <td>{venue.capacity}</td> 
            <td>{venue.building}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VenueTable;
