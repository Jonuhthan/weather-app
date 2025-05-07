import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-white text-black font-serif">
      <div className="flex flex-col h-screen items-center justify-center">
        <SearchBar />
        <Results />
      </div>
    </div>
  );
}