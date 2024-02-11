export class ApiClient {
  static async getBalance(onError: () => void) {
    try {
      const response = await fetch("http://localhost:5011/balance");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("right after awaiting",data);
      return data
    } catch (error) {
      onError();
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}
