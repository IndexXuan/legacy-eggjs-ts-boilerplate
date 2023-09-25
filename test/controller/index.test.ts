import assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/controller/index', () => {
  it('should GET /', async () => {
    const result = await app.httpRequest().get('/').expect(200);
    assert(result.text === 'hi, egg');
  });
  it('should GET /?lang=ts', async () => {
    const result = await app.httpRequest().get('/?lang=ts').expect(200);
    assert(result.text === 'hi, egg.ts');
  });
});
