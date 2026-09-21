"use client";

import { useState } from "react";
import { createSisterConcern, updateSisterConcern, deleteSisterConcern } from "@/app/actions/sisterConcern";
import { UploadCloud, CheckCircle, AlertCircle, Edit, Trash2, X } from "lucide-react";

export default function SisterConcernManager({ initialData }: { initialData: any[] }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", description: "", websiteLink: "" });

  const handleEditClick = (item: any) => {
    setEditingId(item._id);
    setFormState({ name: item.name, description: item.description, websiteLink: item.websiteLink });
    setStatus(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormState({ name: "", description: "", websiteLink: "" });
    setStatus(null);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this Sister Concern?")) return;
    const result = await deleteSisterConcern(id);
    if (result.error) setStatus({ type: "error", msg: result.error });
    else setStatus({ type: "success", msg: result.message || "Deleted" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const result = editingId ? await updateSisterConcern(editingId, formData) : await createSisterConcern(formData);

    if (result.error) {
      setStatus({ type: "error", msg: result.error });
    } else if (result.success) {
      setStatus({ type: "success", msg: result.message || "Success!" });
      if (!editingId) {
        (e.target as HTMLFormElement).reset();
      } else {
        handleCancelEdit();
      }
    }
    setLoading(false);
  };

  return (
    <div className="space-y-12">
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{editingId ? "Edit Sister Concern" : "Add Sister Concern"}</h2>
          {editingId && (
            <button onClick={handleCancelEdit} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 bg-gray-100 px-4 py-2 rounded-lg transition-colors">
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

        <form key={editingId || "create"} onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" name="name" defaultValue={formState.name} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website Link (URL)</label>
              <input type="url" name="websiteLink" defaultValue={formState.websiteLink} required placeholder="https://..." className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea name="description" defaultValue={formState.description} rows={3} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-brand-green outline-none"></textarea>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
            <UploadCloud className="mx-auto text-gray-400 mb-2" size={32} />
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {editingId ? "Upload New Logo (Leave blank to keep existing)" : "Upload Company Logo"}
            </label>
            <input type="file" name="logo" accept="image/*" required={!editingId} className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brand-green/10 file:text-brand-green hover:file:bg-brand-green/20 cursor-pointer" />
          </div>

          <button type="submit" disabled={loading} className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-green-dark transition-colors flex justify-center items-center">
            {loading ? <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span> : (editingId ? "Update Sister Concern" : "Add Sister Concern")}
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Manage Entities</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="py-4 px-6 font-semibold text-gray-700">Logo</th>
                  <th className="py-4 px-6 font-semibold text-gray-700">Company Name</th>
                  <th className="py-4 px-6 font-semibold text-gray-700">Website</th>
                  <th className="py-4 px-6 font-semibold text-gray-700 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {initialData.map((item) => (
                  <tr key={item._id} className="border-b border-gray-50 hover:bg-gray-50/50">
                    <td className="py-4 px-6">
                      <img src={item.logoUrl} alt={item.name} className="h-10 w-auto object-contain bg-gray-50 p-1 rounded border border-gray-200" />
                    </td>
                    <td className="py-4 px-6 font-medium text-gray-900">{item.name}</td>
                    <td className="py-4 px-6">
                      <a href={item.websiteLink} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline text-sm truncate max-w-[150px] inline-block">
                        {item.websiteLink}
                      </a>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button onClick={() => handleEditClick(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg mr-2"><Edit size={18} /></button>
                      <button onClick={() => handleDelete(item._id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}