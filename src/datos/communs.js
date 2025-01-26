const apiRequest = async (endpoint, method = "GET", body = null) => {
  const authHeader = localStorage.getItem("authHeader");

  if (!authHeader) {
    throw new Error("Authorization header is missing. Please log in.");
  }

  const options = {
    method, // HTTP method (GET, POST, PUT, DELETE, etc.)
    headers: {
      Authorization: authHeader,
      "Content-Type": "application/json", // Assume JSON; adjust if necessary
    },
  };

  if (body) {
    options.body = JSON.stringify(body); // Add the body if provided
  }

  try {
    const response = await fetch(
      `https://juanpm.pythonanywhere.com/api/${endpoint}/`,
      options
    );

    if (!response.ok) {
      const errorMessage = `Error ${response.status}: ${response.statusText}`;
      const errorDetails = await response.json();
      throw new Error(`${errorMessage} - ${JSON.stringify(errorDetails)}`);
    }

    try {
      return await response.json(); // Return the parsed JSON data
    } catch (e) {
      return "ok";
    }
  } catch (error) {
    console.error("API request error:", error.message);
    throw error; // Rethrow for the caller to handle
  }
};

// Fetch data (GET)
export const fetchData = async (endpoint, setState) => {
  try {
    const data = await apiRequest(endpoint, "GET");
    console.log(`Fetched ${endpoint}:`, data);
    setState(data);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error.message);
  }
};

// Add data (POST)
export const addData = async (endpoint, newData) => {
  try {
    const response = await apiRequest(endpoint, "POST", newData);
    console.log(`${endpoint} added:`, response);
  } catch (error) {
    console.error(`Failed to add ${endpoint}:`, error.message);
  }
};

// Update data (PUT)
export const updateData = async (endpoint, id, updatedData) => {
  try {
    const response = await apiRequest(`${endpoint}/${id}`, "PUT", updatedData);
    console.log(`${endpoint} updated:`, response);
  } catch (error) {
    console.error(`Failed to update ${endpoint}:`, error.message);
  }
};

// Delete data (DELETE)
export const deleteData = async (endpoint, id) => {
  try {
    await apiRequest(`${endpoint}/${id}`, "DELETE");
    console.log(`${endpoint} with ID ${id} deleted.`);
  } catch (error) {
    console.error(`Failed to delete ${endpoint}:`, error.message);
  }
};
