import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const cldMediaDelete = async(mediaId) => {
    try {

        cloudinary.v2.api
        .delete_resources([mediaId], 
        { type: 'upload', resource_type: 'image' })
    }catch(error) {
        console.log("Error in CLD_MEDIA_DELETE: ", error);
    }
}