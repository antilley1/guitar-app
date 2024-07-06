interface GuitarIdeaProps {
    title: string;
    description: string;
    songExamples: string[]; //This would need to be a type Song that has a name, artist, key, etc
    relatedIdeas?: string[];
    // add any other properties you need
  }
  
  export default function GuitarIdea({ title, description, songExamples }: GuitarIdeaProps) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-center">{title}</h3>
        <p className="text-700">{description}</p>
        <p className="text-700 italic">Examples: {songExamples}</p>
      </div>
    );
  }