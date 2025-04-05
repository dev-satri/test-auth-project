
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

# APIs and Payload
## Health
> This is a default API to ensure our project is functional
```
http://localhost:3000/health
```
![health](health.png)

## Auth
- SignUp 
> Use this API to signup user
<br>

`POST`
```
http://localhost:3000/auth/signup
```
![SignUp](signup.png)


- Login
> Use this API to login user
<br>

`POST`
```
http://localhost:3000/auth/login
```
![Login](login.png)


- User [GUARDED]
> Use this API to fetch user's own profile. 
<br>

`GET`
```
http://localhost:3000/auth/user
```
Note: As this endpoint has **RouteGuard** you'll need to pass token obtained during login/register as Bearer Token through Header.
<br>
![user](user.png)


- Update User [GUARDED]
> Use this API to update user. 
<br>

`PUT`
```
http://localhost:3000/auth/update-user
```
![update-user](update-user1.png)
![update-user2](update-user2.png)

## Product
- Add Product [GUARDED]
> Use this API to add product
```
http://localhost:3000/product/add-product
```
![add-product](add-product.png)

- Get All Product
> Use this API to fetch all available products

`GET`
```
http://localhost:3000/product/all-product
```
![all-product](all-product.png)

- Get Product (Single) [GUARDED]
> Use this API to fetch individual product
<br>

`GET`
```
http://localhost:3000/product/<PLACE_PRODUCT_ID_HERE>
```
![get-individual-product](get-individual-product.png)


- Update Product (Single) [GUARDED]
> Use this API to update individual product
<br>

`PUT`
```
http://localhost:3000/product/<PLACE_PRODUCT_ID_HERE>
```
![update-individual-product](update-individual-product.png)


- Delete Product (Single) [GUARDED]
> Use this API to delete individual product
<br>

`DELETE`
```
http://localhost:3000/product/<PLACE_PRODUCT_ID_HERE>
```
![delete-product](delete-product.png)


## Upload

- Upload File (Single) [GUARDED]
> Use this API to upload file
<br>

`POST`
```
http://localhost:3000/upload
```
![upload](upload.png)
Inorder to view the uploaded image open your browser and load file in provided format
```
http://localhost:3000/upload/<FILE_NAME>
```
![view](view.png)