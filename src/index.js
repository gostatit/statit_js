

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

  async getObs(id, end) {
    return this.post('getObs', { id, end });
  }

  async getObsSum(id, end, periods) {
    return this.post('getObsSum', { id, end, periods });
  }

  async getObsAverage(id, end, periods) {
    return this.post('getObsAverage', { id, end, periods });
  }

  async getObsChange(id, end, periods) {
    return this.post('getObsChange', { id, end, periods });
  }

  async getObsChangePercent(id, end, periods) {
    return this.post('getObsChangePercent', { id, end, periods });
  }

  async getObsDate(id, end) {
    return this.post('getObsDate', { id, end });
  }

  async getPoint(id, end) {
    return this.post('getPoint', { id, end });
  }

  async getPointSum(id, end, periods) {
    return this.post('getPointSum', { id, end, periods });
  }

  async getPointAverage(id, end, periods) {
    return this.post('getPointAverage', { id, end, periods });
  }

  async getPointChange(id, end, periods) {
    return this.post('getPointChange', { id, end, periods });
  }

  async getPointChangePercent(id, end, periods) {
    return this.post('getPointChangePercent', { id, end, periods });
  }

  async getSerie(id, start, end) {
    return this.post('getSerie', { id, start, end });
  }

  async getSerieSum(id, start, end, periods) {
    return this.post('getSerieSum', { id, start, end, periods });
  }

  async getSerieAverage(id, start, end, periods) {
    return this.post('getSerieAverage', { id, start, end, periods });
  }

  async getSerieChange(id, start, end, periods) {
    return this.post('getSerieChange', { id, start, end, periods });
  }

  async getSerieChangePercent(id, start, end, periods) {
    return this.post('getSerieChangePercent', { id, start, end, periods });
  }
}

module.exports = { CoreAPI, FunctionsAPI };