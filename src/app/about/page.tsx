import { Link } from "next-view-transitions"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center flex-col font-[family-name:var(--font-geist-sans)]">
      <Image
        className="mt-4 rounded-lg border border-gray-800 w-52 h-52 object-cover"
        src="/img-perfil-rubert.webp"
        alt="Rubert"
        width={200}
        height={400}
        style={{
          viewTransitionName: "image"
        }}
      />
      <h1
        className="text-2xl text-white mb-2 mt-4"
        style={{
          viewTransitionName: "about"
        }}
      >
        Página about
      </h1>
      <Link
        href="/"
        className="text-white hover:underline"
        style={{
          viewTransitionName: "home"
        }}
      >
        Ir a home
      </Link>
    </div>
  )
}
