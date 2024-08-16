'use client';

import IdeaContent from '../../components/IdeaContent';
import CommentSection from '../../components/CommentSection';
import NavigateIdeas from '../../components/NavigateIdeas';

export default function IdeaEditorPage({ params }: { params: { id: string } }) {

  const ideaId: string = params.id;

    return(
      <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-base-100">
        <div className='w-full max-w-5xl rounded-lg p-4 bg-neutral'>
          <IdeaContent id={ ideaId }/>
        </div>
        <CommentSection id={ ideaId }/>
        <NavigateIdeas ideaId={ ideaId }/>
      </main>
    )
}