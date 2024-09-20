import { Link } from "next-view-transitions"
import Image from "next/image"

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center flex-col font-[family-name:var(--font-geist-sans)]">
      <h1
        className="text-2xl text-white mb-2"
        style={{
          viewTransitionName: "home"
        }}
      >
        Página Home
      </h1>
      <Link
        href="/about"
        className="text-white hover:underline"
        style={{
          viewTransitionName: "about"
        }}
      >
        Ir a About
      </Link>
      <Image
        className="mt-4 rounded-lg border border-gray-800"
        src="/img-perfil-rubert.webp"
        alt="Rubert"
        width={200}
        height={400}
        style={{
          viewTransitionName: "image"
        }}
      />
    </div>
  )
}
