import Link from "next/link";

export default function NotFound() {
    return (
        <div className="py-20 text-center">
            <h1>404</h1>
            <p>Page not found.</p>

            <Link href="/">
                Go Home
            </Link>
        </div>
    );
}