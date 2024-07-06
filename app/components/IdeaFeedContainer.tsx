import IdeaFeed from "./IdeaFeed";

export function IdeaFeedContainer() {
    return (
        <div className="w-full max-w-5xl rounded-lg border border-gray-300 p-4 flex flex-col justify-between h-full">
          <div className="text-xl font-bold mb-4 text-center">Ideas</div>
          <IdeaFeed ></IdeaFeed>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end mr-4 mb-4">Add Idea</button>
        </div>
    );
}
