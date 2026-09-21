import { getAllNewsletters } from "@/app/actions/newsletter";
import NewsletterManager from "./NewsletterManager";

export default async function AdminNewslettersPage() {
  const newsletters = await getAllNewsletters();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Newsletters</h1>
        <p className="text-gray-500">Upload PDF documents to generate monthly newsletter cards.</p>
      </div>
      <NewsletterManager initialData={newsletters} />
    </div>
  );
}