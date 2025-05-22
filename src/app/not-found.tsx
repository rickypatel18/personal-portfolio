import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found-section flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <h3 className="text-lg text-gray-600 mt-2">
        This page could not be found.
      </h3>
      <Link
        href="/"
        className="mt-6 px-4 py-2 bg-primary text-white rounded-lg"
      >
        Go to Home
      </Link>
    </main>
  );
}
