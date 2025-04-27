export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold text-blue-700">LogoAnimation</h2>
      <div className="space-x-4">
        <a href="/" className="text-gray-700">Home</a>
        <a href="/login" className="text-gray-700">Login</a>
        <a href="/dashboard" className="text-gray-700">Dashboard</a>
      </div>
    </nav>
  )
}
