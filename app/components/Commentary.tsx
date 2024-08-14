export default function Commentary({ id }: { id: string }) {
    return (
        <div className="text-lg p-4">
            <p>Commentary for Idea #{id}</p>
        </div>
    );
}