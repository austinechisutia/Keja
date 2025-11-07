function Navbar() {
  return (
  <nav className="bg-white text-black px-6 py-4 flex items-center justify-between">
  {/* LEFT */}
  <div className="text-xl font-galada">
    KejaHunt
  </div>

  {/* CENTER */}
  <ul className="hidden md:flex gap-6 text-base">
    <li><a href="#" className="hover:text-blue-600">Home</a></li>
    <li><a href="#" className="hover:text-blue-600">About</a></li>
    <li><a href="#" className="hover:text-blue-600">Houses</a></li>
    <li><a href="#" className="hover:text-blue-600">Blog</a></li>
    <li><a href="#" className="hover:text-blue-600">Agents</a></li>
    <li><a href="#" className="hover:text-blue-600">Contact</a></li>


  </ul>

  {/* RIGHT */}
  <div>
    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
      SEARCH PROPERT
    </button>
  </div>
</nav>

  );
}

export default Navbar;