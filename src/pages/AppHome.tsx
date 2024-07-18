import { useState } from "react";
import BasicList from "../components/BasicList";
import PaginatedList from "../components/PaginatedList";
import InfiniteList from "../components/InfiniteList";

const Home = () => {
  const [displayFlag, setDisplayFlag] = useState<
    "_BASIC_" | "_PAGINATED_" | "_INFINITE_"
  >("_BASIC_"); // state to control list display

  return (
    <div className="home-page w-full">
      <h3>Data Fetching With RTK Query</h3>
      <div className="btn-group w-full mt-3 mb-4 text-center">
        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("_BASIC_")}
          disabled={displayFlag === "_BASIC_"}
        >
          Basic List
        </button>
        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("_PAGINATED_")}
          disabled={displayFlag === "_PAGINATED_"}
        >
          Paginated List
        </button>

        <button
          className="btn btn-small btn-green-outline m-1"
          onClick={() => setDisplayFlag("_INFINITE_")}
          disabled={displayFlag === "_INFINITE_"}
        >
          Infinite List
        </button>
      </div>

      <div className="product-list-sec w-full text-center">
        {/* Rendering all three types of lists in the AppHome page instead of using
        separate routes for them */}
        {displayFlag === "_BASIC_" && <BasicList />}
        {displayFlag === "_PAGINATED_" && <PaginatedList />}
        {displayFlag === "_INFINITE_" && <InfiniteList />}
      </div>
    </div>
  );
};

export default Home;
