import resizeImage from '../utilities/resize';
import supertest from 'supertest';
import app from '../index';
const request = supertest(app);

describe('the function work sucessfully', () => {
  it('the resize function called sucessfully', () => {
    resizeImage('encenadaport', 200, 200);
    expect(resizeImage).toHaveBeenCalled;
  });
  it('check the resize function is truthy', () => {
    expect(resizeImage).toBeTruthy();
  });
  it('check the resize function is Defined sucessfully', () => {
    expect(resizeImage).toBeDefined();
  });
});

describe('the end point work sucessfully', () => {
  it('check the stauts of the endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});
