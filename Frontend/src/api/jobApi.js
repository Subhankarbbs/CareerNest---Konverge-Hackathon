const API_URL = "https://careernest-backend.onrender.com/api/jobs";

export const fetchJobs = async (pageNumber = "", keyword = "") => {
  const query = new URLSearchParams();

  if (pageNumber) query.append("pageNumber", pageNumber);
  if (keyword) query.append("keyword", keyword);

  const response = await fetch(`${API_URL}?${query.toString()}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return response.json();
};

export const fetchJobById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch job");
  }

  return response.json();
};

export const createJob = async (jobData) => {
  const response = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Failed to create job");
  }

  return response.json();
};