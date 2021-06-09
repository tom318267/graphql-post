const Post = require("./models/Post");

const resolvers = {
  Query: {
    getAllPosts: async () => {
      return await Post.find();
    },
    getPost: async (parent, { id }, ctx) => {
      return await Post.findById(id);
    },
  },

  Mutation: {
    createPost: async (parent, args, ctx, info) => {
      const { title, description } = args.post;
      const post = new Post({ title, description });
      await post.save();
      return post;
    },

    deletePost: async (parent, args, ctx, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Ok, post deleted";
    },

    updatePost: async (parent, args, ctx, info) => {
      const { id } = args;
      const { title, description } = args.post;
      const updates = {};
      if (title !== undefined) {
        updates.title = title;
      }
      if (description !== undefined) {
        updates.description = description;
      }
      const post = await Post.findByIdAndUpdate(id, updates, { new: true });
      return post;
    },
  },
};

module.exports = resolvers;
