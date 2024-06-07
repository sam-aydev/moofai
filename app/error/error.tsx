export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-slate-800 to-sky-600 text-center p-4 text-white">
      <p>{error.message}</p>
    </div>
  );
}
