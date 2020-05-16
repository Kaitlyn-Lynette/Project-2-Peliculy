// Test Routes
const axios = require('axios');
describe('HTML Routes', () => {
  // describe('GET /', () => {
  //   it('should return a status code of 200', async () => {
  //     const { status } = await axios.get('/');
  //     expect(status).toBe(200);
  //   });
  //   it('should have content type html', async () => {
  //     const expectedContentType = 'text/html';
  //     const { headers } = await axios.get('/');
  //     const hasJSON =
  //       JSON.stringify(headers).indexOf(expectedContentType) !== -1;
  //     expect(hasJSON).toBe(true);
  //   });
  // });
  describe('GET /newsfeed', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('http://localhost:4044/newsfeed');
      expect(status).toBe(200);
      console.log('This is the newsfeed status',status);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('/newsfeed');
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
  describe('GET /recommend', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('/recommend');
      expect(status).toBe(200);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('/recommend');
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
  describe('GET /search', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('/search');
      expect(status).toBe(200);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('/search');
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
});