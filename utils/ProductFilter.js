

// http://localhost:1337/api/products?filters[category][$eq]=TECH&populate=*

export const filtereData = async (category) => {
    const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
    const baseUrl = "http://localhost:1337/api/";
  
    try {
      const data = await fetch(`${baseUrl}products?filters[category][$eq]=${category}&populate=*`, {
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
  