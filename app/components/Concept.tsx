export default function Concept({ id }: { id: string }) {
    return (
        <div className="text-lg p-4">
            <h2>Image for Concept #{id}</h2>
            <p>Explanation of concept</p>
        </div>
    );
}