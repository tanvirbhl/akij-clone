import { getAllSisterConcerns } from "@/app/actions/sisterConcern";
import SisterConcernManager from "./SisterConcernManager";

export default async function AdminSisterConcernsPage() {
  const concerns = await getAllSisterConcerns();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sister Concerns</h1>
        <p className="text-gray-500">Manage companies associated with Akij Venture Group.</p>
      </div>
      <SisterConcernManager initialData={concerns} />
    </div>
  );
}