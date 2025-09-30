import axios from "axios"

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:8080');
    const resData = response.data;
    return resData;

  } catch (error) {
    console.log("Error fetching data: " + error)
    return "{}"
  }

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
    console.log("upload success!")
  }
  catch (error) {
    console.error("Error uploading data: ", error.response.data.error)
  }
}


export const addUser = async (user) => {
  try {
    await axios.post('http://localhost:8080/api/auth/register', user,
      {
        headers: {
          "Content-Type": "application/json",
          
        },
        body: user
      }
    );
  }
  catch (error) {
    console.error("Error adding user: " + error)
  }
}