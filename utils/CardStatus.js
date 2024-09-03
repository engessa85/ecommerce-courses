// http://localhost:1337/api/carts?populate[products][populate]=banner&filters[email][$eq]=devwebapp85@gmail.com

export const getCardStatus = async (email) => {
    const apiToken = process.env.NEXT_PUBLIC_REST_API_KEY;
    const baseUrl = "http://localhost:1337/api/";
  
    try {
      const data = await fetch(`${baseUrl}carts?populate[products][populate]=banner&filters[email][$eq]=${email}`, {
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