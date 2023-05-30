import axios from 'axios'

class ApiService {

  async get(url) {
    const token = localStorage.getItem('token')
    // axios.defaults.headers.common['Authorization'] = JSON.stringify(token)
    return new Promise(async function (resolve, reject) {
      await axios({
        method: "get",
        url: url,
        // headers:
        // {
        //   'authorization': token,
        //   'Accept': "application/json",
        //   "Content-Type": "application/json",
        // }
      }).then((result) => {
        // console.log("resultttttttttttttttttttt", result)
        resolve(result);
      })
        .catch((err) => {
          console.log("error=: " + err);
          if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
            alert("Login to continue!!")
            // window.location.href = '/admin/dashboard/login'
          } else {
            console.log(err)
            if (err && err.response && err.response.data && err.response.data.message) {
              alert(err.response.data.message);
            } else {
              alert("Error in GET API")
            }
          }
        });
    })
  }

  async post(url, data) {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = JSON.stringify(token)
    return new Promise(async function (resolve, reject) {
      await axios({
        method: "post",
        url,
        data,
        headers:
        {
          'authorization': token,
          'Accept': "multipart/form-data",
          "Content-Type": "multipart/form-data",
        }
      }).then((result) => {
        resolve(result);
      })
        .catch((err) => {
          console.log("error: " + err);
          if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
            alert("Login to continue!!")
            window.location.href = '/admin/dashboard/login'
          } else {
            console.log(err)
            if (err && err.response && err.response.data && err.response.data.message) {
              alert(err.response.data.message);
            } else {
              alert("Error in POST update")
            }
          }
        });
    });
  }

  async put(url, data) {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = JSON.stringify(token)
    return new Promise(async function (resolve, reject) {
      await axios({
        method: "put",
        url: url,
        data,
        headers:
        {
          'authorization': token,
          'Accept': "multipart/form-data",
          "Content-Type": "multipart/form-data",
        }
      }).then((result) => {
        resolve(result);
      })
        .catch((err) => {
          // console.log("error: " + err);
          if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
            alert("Login to continue!!")
            window.location.href = '/admin/dashboard/login'
          } else {
            console.log(err)
            if (err && err.response && err.response.data && err.response.data.message) {
              alert(err.response.data.message);
            } else {
              alert("Error in PUT API")
            }
          }
        });
    });
  }

  async delete(url, data) {
    const token = localStorage.getItem('token')
    axios.defaults.headers.common['Authorization'] = JSON.stringify(token)
    return new Promise(async function (resolve, reject) {
      await axios({
        method: "delete",
        url: url,
        data,
        headers:
        {
          'authorization': token,
          'Accept': "multipart/form-data",
          "Content-Type": "multipart/form-data",
        }
      }).then((result) => {
        resolve(result);
      })
        .catch((err) => {
          // console.log("error: " + err);
          if (err == 'Error: Request failed with status code 403' || err == 'Error: Request failed with status code 401') {
            alert("Login to continue!!")
            window.location.href = '/admin/dashboard/login'
          } else {
            console.log(err)
            if (err && err.response && err.response.data && err.response.data.message) {
              alert(err.response.data.message);
            } else {
              alert("Error in PUT API")
            }
          }
        });
    });
  }


};



export default new ApiService;
