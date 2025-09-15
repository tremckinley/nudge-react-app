import axios from "axios"

export const fetchData = async () => {
  const response = await axios.get('http://localhost:8080');
  const resData = response.data;
  return resData;
}

// Accept data as a parameter and send it in the PUT request
export const uploadData = async (data) => {
    try {

    
    await axios.post('http://localhost:8080', data,
        {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    console.log ("upload success!")
}
catch (error) {
    console.error("Error uploading data: ", error.response.data.error)
}
}
