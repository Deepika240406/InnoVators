import axios from "axios";

const fetchBudgetSuggestions = async (transactions) => {
  try {
    const response = await axios.post("http://localhost:8000/generate-budget", transactions);
    console.log(response.data.suggested_budgets);
    // You can now render this in your UI
  } catch (err) {
    console.error("Error:", err);
  }
};
