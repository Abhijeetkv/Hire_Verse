import React, { useState, useMemo } from "react";
import DashNavbar from "../components/DashNavbar";
import { ChevronRightIcon, Code2Icon, SearchIcon } from "lucide-react";
import { PROBLEMS } from "../data/problem.js";
import { Link } from "react-router-dom";
import { getDifficultyBadgeClass } from "../lib/utils.js";

const ProblemsPage = () => {
  const problems = Object.values(PROBLEMS);

  const easyProblemsCount = problems.filter(p => p.difficulty === "Easy").length;
  const mediumProblemsCount = problems.filter(p => p.difficulty === "Medium").length;
  const hardProblemsCount = problems.filter(p => p.difficulty === "Hard").length;

  // --------------------------
  // SEARCH STATE
  // --------------------------
  const [search, setSearch] = useState("");

  // Filter problems based on search text
  const filteredProblems = useMemo(() => {
    return problems.filter((p) => {
      const combined = `${p.title} ${p.category} ${p.difficulty}`.toLowerCase();
      return combined.includes(search.toLowerCase());
    });
  }, [search, problems]);

  // --------------------------
  // PAGINATION LOGIC
  // --------------------------
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProblems.length / ITEMS_PER_PAGE);

  const indexOfLast = currentPage * ITEMS_PER_PAGE;
  const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
  const currentProblems = filteredProblems.slice(indexOfFirst, indexOfLast);

  const goToNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  // Reset to page 1 when searching
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-400">
        <DashNavbar />

        <div className="max-w-6xl mx-auto px-4 py-12">

          <div className="mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-gray-800">
              Problems Page
            </h1>
            <p className="text-gray-700 text-sm sm:text-lg">
              Sharpen Your Coding Skills With These Problems
            </p>
          </div>

          <div className="mb-6">
            <div className="flex items-center bg-white rounded-xl shadow p-3 gap-3">
              <SearchIcon className="text-gray-500" />
              <input
                type="text"
                placeholder="Search problems..."
                value={search}
                onChange={handleSearch}
                className="w-full outline-none text-gray-800"
              />
            </div>
          </div>

          {/* PROBLEMS LIST */}
          <div className="space-y-4">
            {currentProblems.length === 0 ? (
              <p className="text-center text-gray-700 font-semibold py-6">
                No problems found.
              </p>
            ) : (
              currentProblems.map((problem) => (
                <Link
                  key={problem.id}
                  to={`/problem/${problem.id}`}
                  className="card bg-gray-800 hover:scale-[1.01] transition-transform"
                >
                  <div className="card-body">
                    <div className="flex items-center justify-between gap-4">

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Code2Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h2 className="sm:text-xl font-bold">{problem.title}</h2>
                              <span className={`badge ${getDifficultyBadgeClass(problem.difficulty)}`}>
                                {problem.difficulty}
                              </span>
                            </div>
                            <p className="text-sm text-base-content/60">{problem.category}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-primary">
                        <span className="font-medium">Solve</span>
                        <ChevronRightIcon className="size-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>

          {/* PAGINATION */}
          {filteredProblems.length > 0 && (
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={goToPrev}
                disabled={currentPage === 1}
                className="btn btn-sm btn-primary"
              >
                Previous
              </button>

              <span className="font-semibold text-gray-900">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="btn btn-sm btn-primary"
              >
                Next
              </button>
            </div>
          )}

          <div className="mt-12 card bg-gray-700 shadow-lg">
            <div className="card-body">
              <div className="stats stats-vertical sm:stats-horizontal">

                <div className="stat">
                  <div className="stat-title">Total Problems</div>
                  <div className="stat-value text-primary">{problems.length}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Easy</div>
                  <div className="stat-value text-success">{easyProblemsCount}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Medium</div>
                  <div className="stat-value text-warning">{mediumProblemsCount}</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Hard</div>
                  <div className="stat-value text-error">{hardProblemsCount}</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProblemsPage;
