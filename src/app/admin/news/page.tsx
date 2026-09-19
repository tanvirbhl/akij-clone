import { getAllAdminNews } from "@/app/actions/news";
import NewsManager from "./NewsManager";

export default async function AdminNewsPage() {
  // Fetch all news securely on the server
  const allNews = await getAllAdminNews();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage News & Media</h1>
        <p className="text-gray-500">Publish new articles, or edit and delete existing ones.</p>
      </div>

      {/* Pass the data to the interactive client component */}
      <NewsManager initialNews={allNews} />
    </div>
  );
}