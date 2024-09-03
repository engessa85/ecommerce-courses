export const getSingleData = async (id) => {
    const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
    const baseUrl = "http://localhost:1337/api/";
  
    try {
      const data = await fetch(`${baseUrl}products/${id}?populate=*`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
      });
  
      return data.json();
    } catch (error) {
      console.log(error);
      throw new Error(error)
      
    }
  };



  export const createCard = async (payload) => {
    const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
    const baseUrl = "http://localhost:1337/api/";
  
    try {
      const data = await fetch(`${baseUrl}carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },body: JSON.stringify(payload)
      });
  
      return data.json();
    } catch (error) {
      console.log(error);
      throw new Error(error)
      
    }
  };
  