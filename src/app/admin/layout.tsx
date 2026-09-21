import Link from "next/link";
import { logoutAdmin } from "@/app/actions/auth";
import { LayoutDashboard, Briefcase, Newspaper, LogOut, FileText } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a202c] text-white flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-white">AKIJ Admin</h2>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium"
          >
            <LayoutDashboard size={20} />
            Dashboard
          </Link>
          <Link
            href="/admin/jobs"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Briefcase size={20} />
            Manage Jobs
          </Link>
          <Link
            href="/admin/news"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <Newspaper size={20} />
            Manage News
          </Link>
          <Link
            href="/admin/newsletters"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
          >
            <FileText size={20} />
            Manage Newsletters
          </Link>
        </nav>

        <div className="p-4">
          <form action={logoutAdmin}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors font-medium"
            >
              <LogOut size={20} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
