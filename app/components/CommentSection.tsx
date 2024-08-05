export default function CommentSection( { id }: { id: string } ) {
    return (
        <div className="w-full max-w-5xl rounded-lg p-4 flex flex-col justify-between h-full text-base-content">
          <div className="text-xl font-bold mb-4 text-center">Comments for Idea #{id}</div>
        </div>
    );
}