import { useState } from "react";
import BasicList from "../components/BasicList";
import PaginatedList from "../components/PaginatedList";
import InfiniteScroll from "../components/InfiniteScroll";

function Home() {
  const [displayFlag, setDisplayFlag] = useState<
    "Basic" | "Paginated" | "Infinite"
  >("Basic"); // State to control data fetching

  return (
    <div className="home-page w-full">
      <h3>Data Fetching With RTK Query</h3>
      <div className="btn-group w-full mt-3 mb-4 text-center">
        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("Basic")}
          disabled={displayFlag === "Basic"}
        >
          Basic list
        </button>
        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("Paginated")}
          disabled={displayFlag === "Paginated"}
        >
          Paginated list
        </button>

        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("Infinite")}
          disabled={displayFlag === "Infinite"}
        >
          Infinite list
        </button>
      </div>

      <div className="product-list-sec w-full text-center">
        {/* Rendering the product lists in the AppHome page instead of using
        separate routes for them */}
        {displayFlag === "Basic" && <BasicList />}
        {displayFlag === "Paginated" && <PaginatedList />}
        {displayFlag === "Infinite" && <InfiniteScroll />}
      </div>
    </div>
  );
}

export default Home;
