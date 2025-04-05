
# Simple Nest Js Auth Project

### How to ?
Install these packages. To do so just add these in terminal and hit `Enter`
```
npm install nestjs
npm install @nestjs/config
npm install @nestjs/mongoose
npm install class-validator
npm install class-transformer
npm install @nestjs/passport
npm install @nestjs/jwt
npm install passport-jwt
npm install bcryptjs
npm install -D @types/multer
npm install express
npm install @nestjs/platform-express
npm install multer
npm install express
npm install path
npm install --save @nestjs/swagger@8.1.1
npm install --save-dev prettier
npx prettier --write .

```

## Using APIs
Inorder to view all available APIs launch the provided API
```
http://localhost:3000/api/
```
![All Apis](apis.png)

## APIs and Payload
### Health
This is a default API to ensure our project is functional
```
http://localhost:3000/health
```

### Auth
- SignUp
Use this API to signup user
`POST`
```
http://localhost:3000/auth/signup
```
![SignUp](signup.png)
``


- Login
Use this API to login user
`POST`
```
http://localhost:3000/auth/login
```
![Login](login.png)


- User
Use this API to fetch user's own profile. 
`GET`
```
http://localhost:3000/auth/user
```
Note: As this endpoint has **RouteGuard** you'll need to pass token obtained during login/register as Bearer Token through Header.
![user](user.png)


- Update User
Use this API to update user. 
`PUT`
```
http://localhost:3000/auth/update-user
```
![update-user](update-user1.png)
![update-user2](update-user2.png)

