import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Dog App (Next)</h1>
        <div>
          <Link href="/">Home</Link> | <Link href="/about">About</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
