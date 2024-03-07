# Blog Application

An open-source application built using Hono, React and everything a production-ready application has.

> **Warning**
> This app is a work in progress. I'm building this in public. You can follow the progress on Twitter [@heyy_harshh](https://twitter.com/heyy_harshh).

## About this project
This project is an experiment to see how a modern app (with cloudflare workers, postgres DB, Hono, Prisma, JWT and React) would work in a Production ready application.

## Features
- **React** for Frontend
- **TailwindCSS** for CSS
- **Hono** for Backend
- **Typescript** as Language
- **Postgres** for Database
- **Cloudflare** for serverless functions
- **Prisma** for ORM and connection pool
- **JWT** for authentication
- **Zod** for Validation

Here is the Journey of this application from scatch
- Initialize using Hono
- Created Handlers for signup, signin, blogs
- Initialize Database using **Neon.tech Postgres** and **Prisma**
- Created Schema for User and Blogs
- Set up **JWT** auth token using **Hono**
- Make Separate Routes for User and Blog
- Tested all Routes and Deployed Backend to Cloudflare

### Why Prisma Accerlerate is Used?  
- ![Db](image.png)
