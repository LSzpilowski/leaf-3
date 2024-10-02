interface IProject {
  title?: string;
  location?: string;
  district?: string;
  estimatedCost?: string;
  excerpt?: string;
  content?: string;
  id?: number;
}

interface IDialogProject {
  project: IProject;
  index: number;
}

function ActiveProject({ project, index }: IDialogProject) {
  return (
    <div className="flex flex-col justify-start md:gap-5 gap-10">
      <div>
        <p className="font-bold">Location</p>
        <p>{project.location}</p>
      </div>
      <div className="border-b-2 pb-10">
        <p className="font-bold">Excerpt</p>
        <p>{project.excerpt}</p>
      </div>
      <div>
        <p className="font-bold">Project description</p>
        <p>{project.content}</p>
      </div>
    </div>
  );
}

export default ActiveProject;
