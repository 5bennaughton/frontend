import axios from 'axios';
import { useQuery } from 'react-query';
import { ModuleJSON } from './types';


const fetchVenue = async (): Promise<ModuleJSON[]> => {
  const response = await axios.get("http://localhost:8080/api/v1/lecturer");
  // Check the structure of your response to access the correct data
  return response.data.data_embedded.cars; // Update this line if needed
};

const ModuleTable = () => {
  const { isLoading, error, data } = useQuery<ModuleJSON[], Error>("cars", fetchVenue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <table>
      <tbody>
        {data?.map((module: ModuleJSON) => (
          <tr key={module._links.self.href}> 
            <td>{module.moduleCode}</td> 
            <td>{module.moduleName}</td> 
            // TODO add staffID number here 
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ModuleTable;
