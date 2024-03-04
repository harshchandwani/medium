import { Hono } from 'hono';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';


// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string,
  }
}>();

app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);


app.post('/api/v1/blog', (c) => {
  return c.text("Blog route")
})
app.put('/api/v1/blog', (c) => {
  return c.text("Blog update")
})
app.get('/api/v1/blog/:id', (c) => {
  return c.text('Blog of Id')
})
app.get('/api/v1/blog/bulk', (c) => {
  return c.text("All blogs here")
})
export default app
