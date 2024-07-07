import Link from "next/link";

interface GuitarIdeaProps {
    id: number;
    title: string;
    description: string;
    songExamples: string[]; //This would need to be a type Song that has a name, artist, key, etc
    relatedIdeas?: string[];
    // add any other properties you need
  }
  
  export default function GuitarIdea({ id, title, description, songExamples }: GuitarIdeaProps) {
    return (
      <div className="card bg-neutral text-neutral-content p-4 rounded-lg mb-4">
        <div className="card-body">
          <h2 className="card-title text-lg font-bold mb-2 text-center">{title}</h2>
          <p className="text-neutral-content">{description}</p>
          <p className="text-neutral-content italic">Examples: {songExamples}</p>
          <Link href={`/IdeaEditor/${id}`}>
            <button className="bg-primary hover:text-secondary-content hover:bg-secondary text-primary-content font-bold py-2 px-4 rounded mr-4 mb-4 self-end">Edit Idea</button>
          </Link>
        </div>
        
      </div>

    );
  }