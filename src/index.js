

const ENDPOINT = 'https://api.gostatit.com/';

class CoreAPI {
  constructor(username, apikey) {
    this.username = username;
    this.apikey = apikey;
  }

  async post(action, inputDict) {
    const url = new URL('/core', ENDPOINT);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.apikey}`).toString('base64')
      },
      body: JSON.stringify({ action, input: inputDict })
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json();
  }

  async getSerie(id) {
    return this.post('getSerie', { id });
  }

  async listSeries(id) {
    return this.post('listSeries', { id });
  }

  async deleteSerie(id) {
    return this.post('deleteSerie', { id });
  }

  async getSerieJSON(inputDict) {
    return this.post('getSerie', inputDict);
  }

  async batchGetSerieJSON(inputDict) {
    return this.post('batchGetSerie', inputDict);
  }

  async listSeriesJSON(inputDict) {
    return this.post('listSeries', inputDict);
  }

  async putSerieJSON(inputDict) {
    return this.post('putSerie', inputDict);
  }

  async batchPutSerieJSON(inputDict) {
    return this.post('batchPutSerie', inputDict);
  }

  async updateSerieJSON(inputDict) {
    return this.post('updateSerie', inputDict);
  }

  async deleteSerieJSON(inputDict) {
    return this.post('deleteSerie', inputDict);
  }

  async batchDeleteSerieJSON(inputDict) {
    return this.post('batchDeleteSerie', inputDict);
  }
}

class FunctionsAPI {
  constructor(username, apikey) {
    this.username = username;
    this.apikey = apikey;
  }

  async post(action, inputDict) {
    const url = new URL('/functions', ENDPOINT);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from(`${this.username}:${this.apikey}`).toString('base64')
      },
      body: JSON.stringify({ action, input: inputDict })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return response.json();
  }

  async getValue(id, endDate) {
    return this.post('getValue', { id, endDate });
  }

  async getValueSum(id, endDate, periods) {
    return this.post('getValueSum', { id, endDate, periods });
  }

  async getValueAverage(id, endDate, periods) {
    return this.post('getValueAverage', { id, endDate, periods });
  }

  async getValueChange(id, endDate, periods) {
    return this.post('getValueChange', { id, endDate, periods });
  }

  async getValueChangePercent(id, endDate, periods) {
    return this.post('getValueChangePercent', { id, endDate, periods });
  }

  async getValueDate(id, endDate) {
    return this.post('getValueDate', { id, endDate });
  }

  async getObs(id, endDate) {
    return this.post('getObs', { id, endDate });
  }

  async getObsSum(id, endDate, periods) {
    return this.post('getObsSum', { id, endDate, periods });
  }

  async getObsAverage(id, endDate, periods) {
    return this.post('getObsAverage', { id, endDate, periods });
  }

  async getObsChange(id, endDate, periods) {
    return this.post('getObsChange', { id, endDate, periods });
  }

  async getObsChangePercent(id, endDate, periods) {
    return this.post('getObsChangePercent', { id, endDate, periods });
  }

  async getSerie(id, startDate, endDate) {
    return this.post('getSerie', { id, startDate, endDate });
  }

  async getSerieSum(id, startDate, endDate, periods) {
    return this.post('getSerieSum', { id, startDate, endDate, periods });
  }

  async getSerieAverage(id, startDate, endDate, periods) {
    return this.post('getSerieAverage', { id, startDate, endDate, periods });
  }

  async getSerieChange(id, startDate, endDate, periods) {
    return this.post('getSerieChange', { id, startDate, endDate, periods });
  }

  async getSerieChangePercent(id, startDate, endDate, periods) {
    return this.post('getSerieChangePercent', { id, startDate, endDate, periods });
  }
}

module.exports = { CoreAPI, FunctionsAPI };