# Blog Application

An open-source application built using Hono, React and everything a production-ready application has.

> [!WARNING]
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@heyy_harshh](https://twitter.com/heyy_harshh).

## About this project

This project experiments to see how a modern app (with Cloudflare workers, Postgres DB, Hono, Prisma, JWT and React) would work in a Production-ready application.

## Tech Used

- **React** for Frontend
- **TailwindCSS** for CSS
- **Hono** for Backend
- **Typescript** as Language
- **Postgres** for Database
- **Cloudflare** for serverless functions
- **Prisma** for ORM and connection pool
- **JWT** for authentication
- **Zod** for Validation

## Here is the Journey of this application from Scratch

- Initialize using Hono
- Created Handlers for signup, sign-in, and blogs
- Initialize Database using **Neon.tech Postgres** and **Prisma**
- Created Schema for Users and Blogs
- Set up **JWT** auth token using **Hono**
- Make Separate Routes for User and Blog
- Tested all Routes and Deployed Backend to Cloudflare
- Added Zod Validation
- deployed NPM package [explained below]

## Why is Prisma Accelerate used?

- ![Db](image.png)

## Why are we using monorepos like in this case, we use common?

Here are the list of reasons, with advantages

- Code Reusability (if we don't use the common module, we have to define the type and zod implementation on both frontend and backend)
- Consistency (Suppose you change something in the frontend, you have to do it in the backend too, or else your application will break)

> [!IMPORTANT]
> For the frontend we need type or interface
> For the backend we need variables, so we can directly use the same file
> But in the case of Zod, it gives us the benefit, that we can create a a variable and then export it as infer too.

```typescript
//for Backend
export const signupInput = z.object({
    username: z.string();
    password: z.string();
})
//type inference in Zod
//for frontend
type SignupParams = z.infer<typeof signupInput>;
```
![Zod](zod.png)

## How to get Values from Old Object to New Object?
``` typescript
//old Object
const oldObj = {
    name: "harsh",
    age: 21
}

//new Object
const newObj = {
    ...oldObj, 
    age: 23 //you can override values from old Object to new

}
```
This will let us create new Object with the values of old object