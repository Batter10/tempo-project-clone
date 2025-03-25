import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Welkom bij de Tempo App
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/Batter10/tempo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Door Batter10
          </a>
        </div>
      </div>

      <div className="mt-32 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">Tempo Project Clone</h1>
        <p className="mb-8 text-center max-w-md">
          Een Next.js applicatie met Supabase authenticatie en Tailwind CSS styling.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/auth/login" 
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Inloggen
          </Link>
          <Link 
            href="/dashboard" 
            className="px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </main>
  )
}