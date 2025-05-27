// export type Projects = {
//     id: number;
//     projectName: string;
//     tech?: string;
//     content: string;
//   };
  
export interface Projects {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  duration?: string;
  githubUrl?: string;
  liveUrl?: string;
}