import { createContext, useContext, useEffect, useState } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState(() => {
    const storedJobs = localStorage.getItem("jobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const [jobInProgress, setJobInProgress] = useState({});

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (firstJob) => {
    const jobWithId = {
      ...firstJob,
      id: crypto.randomUUID(),
      postedAt: new Date().toISOString(),
    };

    setJobs((prevJobs) => [jobWithId, ...prevJobs]);
    setJobInProgress({});
  };

  const updateTempJob = (data) => {
    setJobInProgress((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        jobInProgress,
        updateTempJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
