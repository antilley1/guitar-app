'use client';

import { IdeaFeedContainer } from "./components/IdeaFeedContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-base-100">
      <h1 className="text-4xl font-bold mb-8 text-base-content">Guitar App</h1>
      <div className="flex justify-center mb-8">
        <IdeaFeedContainer/>
      </div>
    </main>
  );
}