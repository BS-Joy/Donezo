import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div
      className={`bg-white rounded-4xl px-2 md:pr-4 py-1 md:py-3 flex-1 min-w-0 max-w-md flex items-center gap-3 border border-white/60 shadow-sm transition-all duration-200`}
    >
      {/* Search icon */}
      <Search className="w-4 md:w-10" />

      {/* Input */}
      <input
        type="text"
        placeholder="Search Products"
        className="flex-1 min-w-0 bg-transparent outline-none text-[12px] md:text-[14.5px] text-gray-700 placeholder-gray-400 font-medium"
      />

      {/* Shortcut hint */}
      <div
        className={`flex items-center gap-1 bg-light-white text-gray-500 px-2 py-1 rounded-lg shrink-0 select-none transition-opacity duration-150`}
      >
        <span className="text-gray-500 font-semibold text-[13px]">⌘</span>
        <span className="text-gray-500 font-medium text-[13px]">F</span>
      </div>
    </div>
  );
};

export default SearchBar;
