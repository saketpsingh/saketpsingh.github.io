// types.ts or in the same file

export interface Role {
    title: string;
    startDate: string;
    endDate?: string;
    description: string[];
  }
  
  export interface Experience {
    id: string;
    company: string;
    location: string;
    roles: Role[];
  }
  