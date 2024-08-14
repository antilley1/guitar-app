'use client';

import IdeaContent from '../../components/IdeaContent';
import CommentSection from '../../components/CommentSection';
import NavigateIdeas from '../../components/NavigateIdeas';

export default function IdeaEditorPage({ params }: { params: { id: string } }) {

  const ideaId: string = params.id;

    return(
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-base-100">
        <IdeaContent id={ ideaId }/>
        <CommentSection id={ ideaId }/>
        <NavigateIdeas ideaId={ ideaId }/>
      </main>
    )
}