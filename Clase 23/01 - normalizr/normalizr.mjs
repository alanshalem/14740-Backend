import util from 'util';
import normalizr from 'normalizr';

const blogposts = {
  id: 1,
  title: 'My blogpost',
  description: 'Short blogpost description',
  content: 'Hola mundo',
  author: {
    id: 1,
    name: 'Jose',
  },
  comments: [
    {
      id: 1,
      author: 'Rob',
      content: 'Buen post!',
    },
    {
      id: 2,
      author: 'Jane',
      content: 'Totalmente de acuerdo',
    },
  ],
};

const authorSchema = new normalizr.schema.Entity('authors');
const commentSchema = new normalizr.schema.Entity('comments');
const postSchema = new normalizr.schema.Entity('posts', {
  author: authorSchema,
  comments: [commentSchema],
});

const normalizedBlogposts = normalizr.normalize(blogposts, postSchema);
console.log(util.inspect(normalizedBlogposts, false, 12, true));
