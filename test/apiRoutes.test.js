const axios = require('axios');

describe('API Routes', () => {
  describe('GET /api/recommend', () => {
    // - should have a 200 status code
    it('should have a 200 status code', async () => {
      // make a get request & capture the response
      const { status } = await axios.get('/api/recommend');

      // expect the response.status to be 200
      expect(status).toBe(200);
    });
    // - it should have content type json
    it('should have content type json', async () => {
      const expectedContentType = 'application/json';
      const { headers } = await axios.get('/api/recommend');

      const hasJSON = JSON.stringify(headers).indexOf(expectedContentType) !== -1;

      expect(hasJSON).toBe(true);
    });
  });
});