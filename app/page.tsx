import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center  p-24'>
      <h1>Home page</h1>
      <p>
        <Link href='/countries' className='link'>countries</Link>
      </p>
    </main>
  );
}
