module.exports = {
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Your Cloudinary cloud name
        api_key: process.env.CLOUDINARY_API_KEY,       // Your Cloudinary API key
        api_secret: process.env.CLOUDINARY_API_SECRET, // Your Cloudinary API secret
      },
      actionOptions: {
        upload: {},  // Default upload behavior
        delete: {},  // Default delete behavior
      },
    },
  },
};
