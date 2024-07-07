import Link from "next/link";

export default function IdeaEditorPage() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-base-100">
      <h1 className="text-4xl font-bold mb-8 text-base-content">Idea Editor</h1>
      <Link href="/">
        <button className="bg-primary hover:text-accent-content hover:bg-accent text-primary-content font-bold py-2 px-4 rounded mr-4 mb-4 w-full">Back</button>
      </Link>
    </main>
    )
}