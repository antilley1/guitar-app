import IdeaFeed from "./IdeaFeed";
import SideBar from "./SideBar";

import Link from "next/link";

export function IdeaFeedContainer() {
    return (
        <div className="w-full max-w-5xl rounded-lg p-4 flex flex-col justify-between h-full text-base-content">
          <div className="flex flex-row justify-between">
            <div>
              <div className="text-xl font-bold mb-4 text-center">Ideas</div>
              <IdeaFeed></IdeaFeed>
            </div>
            <div className="flex flex-col">
              <Link href="/IdeaEditor/0">
                <button className="bg-primary hover:text-accent-content hover:bg-accent text-primary-content font-bold py-2 px-4 rounded mr-4 mb-4 w-full">Add Idea</button>
              </Link>
              <SideBar></SideBar>
            </div>
          </div>
        </div>
    );
}
