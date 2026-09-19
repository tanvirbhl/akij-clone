export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Welcome to the Admin Dashboard</h1>
      <p className="text-gray-600 mb-8">Select a section from the sidebar to manage your website content.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Jobs Configuration</h3>
          <p className="text-sm text-gray-500 mb-4">Pending MongoDB connection.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-2">News Configuration</h3>
          <p className="text-sm text-gray-500 mb-4">Pending MongoDB connection.</p>
        </div>
      </div>
    </div>
  );
}