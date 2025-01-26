export const apiRequest = async (endpoint, method = "GET", body = null) => {
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
  
      return await response.json(); // Return the parsed JSON data
    } catch (error) {
      console.error("API request error:", error.message);
      throw error; // Rethrow for the caller to handle
    }
  };
  