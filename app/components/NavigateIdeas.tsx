import Link from "next/link";

export default function NavigateIdeas({ ideaId }: { ideaId: string }) {
    return (
        <>
            {parseInt(ideaId) > 1 && (
                <button className="bg-primary hover:text-accent-content hover:bg-accent text-primary-content font-bold py-2 px-4 rounded mr-4">
                    <Link href={`/IdeaEditor/${Number(ideaId) - 1}`}>
                        Previous Idea
                    </Link>
                </button>
            )}
            <button className="bg-primary hover:text-accent-content hover:bg-accent text-primary-content font-bold py-2 px-4 rounded mr-4">
                <Link href={`/IdeaEditor/${Number(ideaId) + 1}`}>Next Idea</Link>
            </button>
            <button className="bg-primary hover:text-accent-content hover:bg-accent text-primary-content font-bold py-2 px-4 rounded mr-4">
                <Link href="/">Back to Idea Feed</Link>
            </button> 
        </>
    );
}
