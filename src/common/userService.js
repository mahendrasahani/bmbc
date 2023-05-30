import { message } from "antd";
import apiService from "./apiService";

const apiURL = process.env.REACT_APP_API_URL

class UserService
{

  async register(data)
  {
    return apiService.post(apiURL + "user/add", {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      qualification: data.qualification,
      address: data.address,
      city: data.city
    });
  }

  async login(data)
  {
    return apiService.post(apiURL + "user/login", {
      email: data.email,
      password: data.password,
    });
  }

  async getAllLocations()
  {
    return apiService.get(apiURL + "location/all");
  }

  async getAllInstitutes()
  {
    return apiService.get(apiURL + "institute/list");
  }

  async getInstitueById(id)
  {
    return apiService.get(apiURL + `institute/id/${id}`);
  }

  async getAllCategories()
  {
    return apiService.get(apiURL + "category/list");
  }

  async getAllExams()
  {
    return apiService.get(apiURL + "exam/list");
  }

  async getAllBatches(filter)
  {
    if (filter == 'all')
    {
      return apiService.get(apiURL + "batch/list");
    } else
    {
      return apiService.get(apiURL + `batch/list?status=${filter}`);
    }
  }



  async getAllBatchesByFilter(exam, city, mode)
  {
    let url = apiURL + `batch/list`;

    if (exam !== 'all' && city === 'all' && mode === 'all')
    {
      url += `?examId=${exam}`;
    }
    else if (city !== 'all' && exam === 'all' && mode === 'all')
    {
      url += `?city=${city}`;
    }
    else if (mode !== 'all' && exam === 'all' && city === 'all')
    {
      url += `?status=${mode}`;
    }
    else if (exam !== 'all' && city !== 'all' && mode === 'all')
    {
      url += `?examId=${exam}&city=${city}`;
    }
    else if (exam !== 'all' && mode !== 'all' && city === 'all')
    {
      url += `?examId=${exam}&status=${mode}`;
    }
    else if (city !== 'all' && mode !== 'all' && exam === 'all')
    {
      url += `?city=${city}&status=${mode}`;
    }
    else if (exam !== 'all' && city !== 'all' && mode !== 'all')
    {
      url += `?examId=${exam}&city=${city}&status=${mode}`;
    } else if (exam === 'all', city === 'all', mode === 'all')
    {
      url = apiURL + `batch/list`;
    }

    return apiService.get(url);
  }


  async getBatchById(id)
  {
    return apiService.get(apiURL + `batch/id/${id}`);
  }

  async requestHelp(userId, data)
  {
    return apiService.post(apiURL + `help/add`, {
      userId: userId,
      subject: data.subject,
      contact: data.contact,
      message: data.message
    });
  }



  async addInstitueReview(id, obj)
  {
    return apiService.post(apiURL + `InstituteReview/add`, {
      instituteId: id,
      message: obj.comment,
      rating: obj.rating,
      userId: obj.userActiveId
    });
  }
  
  async addBatchReview(id, obj)
  {
    return apiService.post(apiURL + `batchReview/add`, {
      batchId: id,
      message: obj.comment,
      rating: obj.rating,
      userId: "644a3bdcc58d9009a4e02190"
    });
  }

  async getUserDetails(id)
  {
    return apiService.get(apiURL + `user/id/${id}`);
  }

}

export default new UserService();

