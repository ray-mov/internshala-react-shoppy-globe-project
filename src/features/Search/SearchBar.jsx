function SearchBar({ setSearch }) {
  return (
    <div className="border-2 border-black pl-2 py-2  rounded-3xl shadow-sm space-x-2 relative max-w-lg mx-auto mb-16">
      <input
        type="text"
        className=" outline-none w-[75%] md:w-[80%]"
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        className="text-white bg-black rounded-3xl px-6
      py-2 font-semibold absolute right-0 top-0"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
