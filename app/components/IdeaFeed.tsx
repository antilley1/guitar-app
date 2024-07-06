import GuitarIdea from "./GuitarIdea"; // Assuming GuitarIdea is the component for each idea

export default function IdeaFeed() {
    var guitarIdeas: any[] = [
      {
        title: "Slide up the 3rd string", 
        description: "Sliding up the G string from the 1st pentatonic position",
        songExamples: ["The Housefire"]
      }, 
      {
        title: "Third string major chord bend", 
        description: "Bending the G string up a whole step to create a major chord with the 1st and 2nd strings",
        songExamples: ["The Housefire"]}, 
    ];
  
    return (
      <div className="text-lg p-4">
        {guitarIdeas.length === 0 
        ? (<div>No ideas yet. Be the first to add an idea.</div>) 
        : (guitarIdeas.map((idea) => ( <GuitarIdea {...idea} />)))}
      </div>
    );
  }