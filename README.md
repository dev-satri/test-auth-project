
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

### Using APIs
Inorder to view all available APIs launch the provided API
```
http://localhost:3000/api/
```
![All Apis](apis.png)

### APIs and Payload
`health`
This is a default API to ensure our project is functional
```
http://localhost:3000/health
```

`auth`
- SignUp
Use this API to signup user
```
http://localhost:3000/auth/signup
```
![SignUp](signup.png)
``
- Login
Use this API to login user
```
http://localhost:3000/auth/login
```
![Login](login.png)
