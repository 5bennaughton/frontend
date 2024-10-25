// Define types for the various entities in your system

// Venue Type
export type VenueJSON = {
  id: number;
  roomNo: string;
  capacity: number;
  building: string;
  _links: {
    self: { href: string };   
  };
}

// Staff Type
export type LecturerJSON = {
  id: number;
  firstName: string;
  lastName: string;
  _links: {
    self: { href: string };   
  };
}

// Module Type
export type ModuleJSON = {
  id: number;
  moduleCode: string;
  moduleName: string;
  staffId: number;  
  _links: {
    self: { href: string };   
    staff: { href: string };
  };
}

// Course Type
export type CourseJSON = {
  id: number;
  courseCode: string;
  modules: number[];  
  _links: {
    self: { href: string };   
    modules: { href: string };
  };
}

// Student Type
export type StudentJSON = {
  id: number;
  firstName: string;
  lastName: string;
  course: number;  
  _links: {
    self: { href: string };   
    course: { href: string };
  };
}

// Event Type
export type EventJSON = {
  semester: string;
  moduleCode: string;
  startTime: string;
  venue: string;   
  type: 'lecture' | 'tutorial' | 'lab';  
  _links: {
    self: { href: string };   
    module: { href: string };
    venue: { href: string };
  };
  
}