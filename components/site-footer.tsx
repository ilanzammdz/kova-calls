import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#080808] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Kova AI. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          <Link
            href="/a2p-guidelines"
            className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
          >
            A2P Guidelines
          </Link>
        </nav>
      </div>
    </footer>
  );
}
