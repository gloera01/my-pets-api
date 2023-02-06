import usersController from '../../src/routes/users/controller';
import { getMockReq, getMockRes } from '@jest-mock/express';

// TODO: mock user model

const { res: mockRes } = getMockRes();

describe('UsersController login', () => {
  test('When params are valid, expect login to be successful', async () => {
    // Arrange
    const req = getMockReq({
      body: {
        email: 'user@mailinator.com',
        password: 'Password1!',
      },
    });
    const accessToken = 'asdjabjhdsa67sd76dfs67dfs';

    const expectedResponse = {
      statusCode: 200,
      payload: {
        accessToken,
      },
    };

    // Act
    const loginResponse = await usersController.login(req, mockRes);

    // Assert
    expect(loginResponse).toMatchObject(expectedResponse);
  });
});
