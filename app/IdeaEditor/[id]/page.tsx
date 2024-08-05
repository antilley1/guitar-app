import Link from "next/link";
import IdeaContent from "../../components/IdeaContent";
import CommentSection from '../../components/CommentSection';

export default function IdeaEditorPage({ params }: { params: { id: string } }) {

  const ideaId = params.id;

    return(
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-base-100">
        <IdeaContent id={ ideaId }/>
        <CommentSection id={ ideaId }/>
      </main>
    )
}