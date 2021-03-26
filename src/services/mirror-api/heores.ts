import { callApiBase } from './base';

const endpoint = "/v1/public/characters"

const ts = '1616589316'
const apiKey = 'e90b73dc595806e9b7b31673914dc1a4'
const hash = 'b7e14dc8e09e043304f27d8b580ff68b'

const HeroesService = {
  getHeroes: async () => {

    const response = await callApiBase(`${endpoint}?ts=${ts}&apikey=${apiKey}&hash=${hash}&=`, {
      title: 'getHeroes - Get Heroes',
      method: 'GET',
    })

    if (response.code === 200) {
      return response.data.results
    }
  },

  getHeroesId: async (id: number) => {

    const response = await callApiBase(`${endpoint}/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}&=`, {
      title: 'getHeroesId - Get Hero Detail',
      method: 'GET',
    })

    if (response.code === 200) {
      return response.data.results[0]
    }
  }
};

export default HeroesService;
