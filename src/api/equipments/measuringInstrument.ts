import { axiosRequest } from 'api/config';
import { ApiResponse } from 'models/api/api';
import { initialEquipmentsRequest } from 'models/api/equipments';

const measuringInstrumentApi = {
  async fetchAllData(postData = initialEquipmentsRequest): Promise<ApiResponse> {
    const { data } = await axiosRequest.post<ApiResponse>('/v1/measuring-instrument', postData);
    return data;
  },
  // fetchUpdateItem() {},
  // fetchGetItem() {},
  // fetchDeleteItem() {},
};

export default measuringInstrumentApi;
