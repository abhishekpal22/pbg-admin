module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
        folder: 'pbg_uploads',
        use_filename: true, // Whether to use the original filename
        unique_filename: true,
        sizeLimit: 5000000,
        debug: true,
      },
    },
  });
  