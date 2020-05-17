// Test Routes
const axios = require('axios');
describe('HTML Routes', () => {
  describe('GET /', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('/');
      expect(status).toBe(200);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('/');
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
  describe('GET /newsfeed', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('http://localhost:4044/newsfeed', { proxy: { host: '127.0.0.1', port: 4044 }});
      expect(status).toBe(200);
      console.log('This is the newsfeed status',status);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('http://localhost:4044/newsfeed', { proxy: { host: '127.0.0.1', port: 4044 }});
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
  describe('GET /recommend', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('http://localhost:4044/recommend', { proxy: { host: '127.0.0.1', port: 4044 }});
      expect(status).toBe(200);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('http://localhost:4044/recommend', { proxy: { host: '127.0.0.1', port: 4044 }});
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
  describe('GET /search', () => {
    it('should return a status code of 200', async () => {
      const { status } = await axios.get('http://localhost:4044/search', { proxy: { host: '127.0.0.1', port: 4044 }});
      expect(status).toBe(200);
    });
    it('should have content type html', async () => {
      const expectedContentType = 'text/html';
      const { headers } = await axios.get('http://localhost:4044/search', { proxy: { host: '127.0.0.1', port: 4044 }});
      const hasJSON =
        JSON.stringify(headers).indexOf(expectedContentType) !== -1;
      expect(hasJSON).toBe(true);
    });
  });
});