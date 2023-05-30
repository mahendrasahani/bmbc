import apiService from "./apiService";

const apiURL = process.env.REACT_APP_API_URL;

class AdminService
{
  async adminLogin(email, password)
  {
    return apiService.post(apiURL + "admin/login", {
      email: email,
      password: password,
    });
  }

  async getAllUsers()
  {
    return apiService.get(apiURL + "user/allusers");
  }

  async addUser(data)
  {
    return apiService.post(apiURL + "user/add", {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      qualification: data.qualification,
      address: data.address,
      city: data.city,
    });
  }

  async getUserById(id)
  {
    return apiService.get(apiURL + `user/id/${id}`);
  }

  async updateUser(data, id, img)
  {
    return apiService.put(apiURL + `user/update`, {
      id: id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      qualification: data.qualification,
      address: data.address,
      city: data.city,
      image: img ? img : undefined,
    });
  }

  async getAllCategories()
  {
    return apiService.get(apiURL + "category/list");
  }

  async addCategory(data)
  {
    return apiService.post(apiURL + "category/add", {
      title: data.title,
    });
  }

  async updateCategory(id, data)
  {
    return apiService.put(apiURL + `category/update`, {
      id: id,
      title: data.title,
    });
  }

  async getCategoryById(id)
  {
    return apiService.get(apiURL + `category/id/${id}`);
  }

  async deleteCategory(id)
  {
    return apiService.delete(apiURL + `category/delete/${id}`);
  }

  async getAllExam()
  {
    return apiService.get(apiURL + `exam/list`);
  }

  async getExamDetailById(id)
  {
    return apiService.get(apiURL + `exam/id/${id}`);
  }

  async addExam(data)
  {
    return apiService.post(apiURL + "exam/add", {
      name: data.name,
      branchName: data.branchName,
    });
  }

  async updateExam(id, data)
  {
    return apiService.put(apiURL + `exam/update`, {
      id: id,
      name: data.name,
      branchName: data.branchName,
    });
  }

  async deleteExam(id)
  {
    return apiService.delete(apiURL + `exam/delete/${id}`);
  }

  async getAllLocations()
  {
    return apiService.get(apiURL + `location/all`);
  }

  async addLocation(data)
  {
    return apiService.post(apiURL + `location/add`, {
      city: data.city,
      state: data.state,
    });
  }

  async updateLocation(id, data)
  {
    return apiService.put(apiURL + `location/update`, {
      id: id,
      city: data.city,
      state: data.state,
    });
  }

  async deleteLocation(id)
  {
    return apiService.delete(apiURL + `location/delete/${id}`);
  }

  async getLocationById(id)
  {
    return apiService.get(apiURL + `location/id/${id}`);
  }

  async getAllInstitutes()
  {
    return apiService.get(apiURL + `institute/list`);
  }

  async addInstitute(data, image)
  {
    return apiService.post(apiURL + "institute/add", {
      name: data.name,
      category: data.category,
      city: data.city,
      info: data.info,
      image: image,
    });
  }

  async updateInstitute(id, data, image)
  {
    return apiService.put(apiURL + "institute/update", {
      id: id,
      name: data.name,
      category: data.category,
      city: data.city,
      info: data.info,
      rating: data.rating,
      image: image
    });
  }

  async getInstituteById(id)
  {
    return apiService.get(apiURL + `institute/id/${id}`);
  }

  async deleteInstitute(id)
  {
    return apiService.delete(apiURL + `institute/delete`, {
      id: id,
    });
  }

  async getAllPlans()
  {
    return apiService.get(apiURL + "plan/list");
  }

  async addPlan(data)
  {
    return apiService.post(apiURL + "plan/add", {
      title: data.title,
    });
  }

  async updatePlan(id, data)
  {
    return apiService.put(apiURL + `plan/update`, {
      id: id,
      title: data.title,
    });
  }

  async getPlanById(id)
  {
    return apiService.get(apiURL + `plan/id/${id}`);
  }

  async deletePlan(id)
  {
    return apiService.delete(apiURL + `plan/delete/${id}`);
  }

  async getAllBatches()
  {
    return apiService.get(apiURL + "batch/list");
  }

  async addBatch(data, img)
  {
    return apiService.post(apiURL + "batch/add", {
      batchName: data.batchName,
      examId: data.examId,
      category: data.category,
      instituteId: data.instituteId,
      branchName: data.branchName,
      planName: data.planName,
      facilities: data.facilities,
      faculties: data.faculties,
      amount: data.amount,
      startDate: data.startDate,
      endDate: data.endDate,
      timings: data.timings,
      image: img ? img : undefined,
    });
  }

  async updateBatch(data, id)
  {
    return apiService.put(apiURL + "batch/update", {
      id: id,
      batchName: data.batchName,
      examId: data.examId,
      instituteId: data.instituteId,
      branchName: data.branchName,
      planName: data.planName,
      facilities: data.facilities,
      faculties: data.faculties,
      amount: data.amount,
      startDate: data.startDate,
      endDate: data.endDate,
      timings: data.timings,
    });
  }

  async getBatchById(id)
  {
    return apiService.get(apiURL + `batch/id/${id}`);
  }

  async deleteBatch(id)
  {
    return apiService.delete(apiURL + `batch/delete/${id}`);
  }

  async getAllOffers()
  {
    return apiService.get(apiURL + "offer/list");
  }

  async addOffer(data)
  {
    return apiService.post(apiURL + "offer/add", {
      offerName: data.offerName,
      code: data.code,
      discountPercent: data.discountPercent,
      startDate: data.startDate,
      endDate: data.endDate,
    });
  }

  async getOfferById(id)
  {
    return apiService.get(apiURL + `offer/id/${id}`);
  }

  async updateOffer(id, data)
  {
    return apiService.put(apiURL + `offer/update`, {
      id: id,
      offerName: data.offerName,
      code: data.code,
      discountPercent: data.discountPercent,
      startDate: data.startDate,
      endDate: data.endDate,
    });
  }

  async deleteOffer(id)
  {
    return apiService.delete(apiURL + `offer/delete/${id}`);
  }

  async getAllBranch()
  {
    return apiService.get(apiURL + `branch/list`);
  }

  async addBranch(data)
  {
    return apiService.post(apiURL + "branch/add", {
      name: data.name,
    });
  }

  async deleteBranch(id)
  {
    return apiService.delete(apiURL + `branch/delete/${id}`);
  }

  async getBranchDetailById(id)
  {
    return apiService.get(apiURL + `branch/id/${id}`);
  }

  async updateBranch(id, data)
  {
    return apiService.put(apiURL + `branch/update`, {
      id: id,
      name: data.name,
    });
  }

  async listAllHelpRequests()
  {
    return apiService.get(apiURL + `help/list`);
  }

  async getHelpRequestReply({ email, message, subject, helpId })
  {
    return apiService.post(apiURL + `help/reply`, {
      email,
      message,
      subject,
      helpId,
    });
  }
  async listInstitueRating()
  {
    return apiService.get(apiURL + `institute/list`);
  }


  async addblog({ data })
  {
    return apiService.post(apiURL + `blog/add`, {
      message: data.message,
      writtenBy:data.adminToken
    });
  }

}

export default new AdminService();
