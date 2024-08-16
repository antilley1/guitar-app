import Concept from './Concept';
import Commentary from './Commentary';

export default function IdeaContent({ id }: { id: string }) {
    return (
        <div className="text-lg p-4 mb-4">
          <h1 className="text-xl font-bold mb-4">Idea</h1>
          <div className="rounded-lg bg-primary p-4 mb-4 text-primary-content">
            <Concept id={id}/>
          </div>
          <div className="rounded-lg bg-primary p-4 mb-4 text-primary-content">
            <Commentary id={id}/>
          </div>
        </div>
    );
}