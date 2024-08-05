export default function IdeaContent({ id }: { id: string }) {
    return (
        <div className="text-lg p-4">
          <h1 className="text-4xl font-bold mb-8 text-base-content">
            Idea Editor for Idea #{id}
          </h1>
        </div>
    );
}