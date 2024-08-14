import Concept from './Concept';
import Commentary from './Commentary';

export default function IdeaContent({ id }: { id: string }) {
    return (
        <div className="text-lg p-4">
          <h1>Idea</h1>
          <Concept id={id}/>
          <Commentary id={id}/>
        </div>
    );
}