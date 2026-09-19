"use client";

import { useState } from "react";
import { createNewsArticle, updateNewsArticle, deleteNewsArticle } from "@/app/actions/news";
import { UploadCloud, CheckCircle, AlertCircle, Edit, Trash2, X } from "lucide-react";

export default function NewsManager({ initialNews }: { initialNews: any[] }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  
  // State for Edit Mode
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    title: "", subTitle: "", excerpt: "", date: "", link: "", isFeatured: false
  });

  const handleEditClick = (article: any) => {
    setEditingId(article._id);
    setFormState({
      title: article.title,
      subTitle: article.subTitle,
      excerpt: article.excerpt,
      date: article.date,
      link: article.link,
      isFeatured: article.isFeatured
    });
    setStatus(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormState({ title: "", subTitle: "", excerpt: "", date: "", link: "", isFeatured: false });
    setStatus(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this article? This action cannot be undone.")) return;
    
    const result = await deleteNewsArticle(id);
    if (result.error) setStatus({ type: "error", msg: result.error });
    else setStatus({ type: "success", msg: result.message || "Deleted" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    
    let result;
    if (editingId) {
      result = await updateNewsArticle(editingId, formData);
    } else {
      result = await createNewsArticle(formData);
    }

    if (result.error) {
      setStatus({ type: "error", msg: result.error });
    } else if (result.success) {
      setStatus({ type: "success", msg: result.message || "Success!" });
      if (!editingId) {
        (e.target as HTMLFormElement).reset();
        setFormState({ title: "", subTitle: "", excerpt: "", date: "", link: "", isFeatured: false });
      } else {
        handleCancelEdit(); // Close edit mode on success
      }
    }
    
    setLoading(false);
  };

  return (
    <div className="space-y-12">
      {/* Form Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingId ? "Edit News Article" : "Publish New Article"}
          </h2>
          {editingId && (
            <button onClick={handleCancelEdit} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors">
              <X size={18} /> Cancel Edit
            </button>
          )}
        </div>

        {status && (
          <div className={`p-4 mb-6 rounded-lg flex items-center gap-3 ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            {status.type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
            <span className="font-medium">{status.msg}</span>
          </div>
        )}

        {/* We use a key based on editingId so the form fully resets/re-mounts when switching modes */}
        <form key={editingId || "create"} onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Article Title</label>
              <input type="text" name="title" defaultValue={formState.title} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sub Title / Lead-in</label>
              <input type="text" name="subTitle" defaultValue={formState.subTitle} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt (Short Description)</label>
            <textarea name="excerpt" defaultValue={formState.excerpt} rows={3} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none"></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
              <input type="date" name="date" defaultValue={formState.date} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">URL Link</label>
              <input type="text" name="link" defaultValue={formState.link} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {editingId ? "Upload New Cover Image (Leave blank to keep existing)" : "Upload Cover Image"}
            </label>
            <input type="file" name="image" accept="image/*" required={!editingId} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-green/10 file:text-brand-green hover:file:bg-brand-green/20 cursor-pointer" />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="isFeatured" id="isFeatured" defaultChecked={formState.isFeatured} className="w-5 h-5 text-brand-green rounded focus:ring-brand-green" />
            <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">Set as Featured (Large Left Card)</label>
          </div>

          <button type="submit" disabled={loading} className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-green-dark transition-colors flex justify-center items-center gap-2">
            {loading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : (editingId ? "Update News Article" : "Publish News")}
          </button>
        </form>
      </div>

      {/* Published News Table */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Published News</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-4 px-6 font-semibold text-gray-700">Image</th>
                  <th className="py-4 px-6 font-semibold text-gray-700">Title</th>
                  <th className="py-4 px-6 font-semibold text-gray-700">Date</th>
                  <th className="py-4 px-6 font-semibold text-gray-700">Featured</th>
                  <th className="py-4 px-6 font-semibold text-gray-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {initialNews.map((article) => (
                  <tr key={article._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td className="py-4 px-6">
                      <img src={article.image} alt={article.title} className="w-16 h-10 object-cover rounded" />
                    </td>
                    <td className="py-4 px-6">
                      <p className="font-medium text-gray-900 line-clamp-1">{article.title}</p>
                    </td>
                    <td className="py-4 px-6 text-gray-600 whitespace-nowrap">{article.date}</td>
                    <td className="py-4 px-6">
                      {article.isFeatured ? (
                        <span className="bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full text-xs font-semibold">Featured</span>
                      ) : (
                        <span className="bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full text-xs font-semibold">Standard</span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleEditClick(article)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                          <Edit size={18} />
                        </button>
                        <button onClick={() => handleDelete(article._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {initialNews.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">No news articles published yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}