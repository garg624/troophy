'use client';
import { awardSubmitAction } from '@/actions/awardSubmitAction';
import { useToast } from '@/components/ui/use-toast';
import { CircleCheckBigIcon, ImageDownIcon, ImagesIcon, PackagePlusIcon } from 'lucide-react';
import { CldUploadWidget } from 'next-cloudinary';
import { useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Select");
  const [isAvailable, setIsAvailable] = useState(false);
  const [trophyImage, setTrophyImage] = useState(null);
  const [size, setSize] = useState("Select");  
  const [publicId, setPublicId] = useState("");
  const [isUploaded, setIsuploaded] = useState(false);
  const {toast} = useToast();
  const router = useRouter();

  const formValueReseter = () => {
    setName("");
    setPrice("");
    setCategory("Select");
    setIsAvailable(false);
    setTrophyImage(null);
    setSize("Select");
    setIsuploaded(false);
  }

  useEffect(()=> {
    const uploader = document.getElementById("cldUploadWigetButton");
    if(isUploaded === true){
      uploader.classList.remove('btn-info');
      uploader.classList.add('pointer-events-none','cursor-not-allowed','btn-success');
    }else {
      uploader.classList.remove('pointer-events-none','cursor-not-allowed','btn-success');
      uploader.classList.add('btn-info');
    }
  },[isUploaded]);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <form 
      action={()=>{
        const awardData = {
          name,
          price,
          category,
          isAvailable,
          trophyImage,
          size,
          publicId,
        };
        awardSubmitAction(awardData);
        formValueReseter();
        toast({
          title: "New Award",
          description: "New Award added to catalog."
        })
      }}
       
      className='flex flex-col items-center justify-center gap-3'>
        <label htmlFor="name">Name:</label>
        <input 
          required={true}
          id="name"
          name="name"
          value={name} 
          onChange={(e)=> setName(e.target.value)} 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered input-md w-full max-w-xs" 
        />

        <label htmlFor="price">Price:</label>
        <input 
          required={true}
          id="price"
          name="price"
          value={price} 
          onChange={(e)=> setPrice(e.target.value)} 
          type="text" 
          placeholder="Type here" 
          className="input input-bordered input-md w-full max-w-xs" 
        />

        <label htmlFor="category">Category:</label>
        <select 
          required={true}
          name="category"
          id="category"
          value={category} 
          onChange={(e)=> setCategory(e.target.value)} 
          className="input input-bordered input-md w-full max-w-xs"
        >
          <option value="Select">Select</option>
          <option value="trophy">Trophy</option>
          <option value="medal">Medal</option>
          <option value="badge">Badge</option>
          <option value="plate">Plate</option>
        </select>

        <label htmlFor='is-available'>Available:</label>
        <select 
          required={true}
          name='isAvailable'
          id="is-available"
          value={isAvailable.toString()} 
          onChange={(e)=> setIsAvailable(e.target.value === 'true')} 
          className="input input-bordered input-md w-full max-w-xs"
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label htmlFor="trophy-sample">Trophy Sample:</label>
        <div className='btn btn-info text-white' id='cldUploadWigetButton'>
          <CldUploadWidget
            cloudName={process.env.CLOUDINARY_CLOUD_NAME}
            uploadPreset="lomgpwbe"
            folder="trophy"
            onSuccess={(result) => {
              setPublicId(result.info.public_id);
              setTrophyImage(result.info.secure_url);
              setIsuploaded(true); 
            }}
          >
            {({ open }) => (
              <>
                {!isUploaded ? ( 
                  <>
                    <ImageDownIcon />
                    <button onClick={(e) => { 
                      e.preventDefault(); 
                      open(); 
                    }}>Upload Image</button>
                  </>
                ): (
                  <>
                    <CircleCheckBigIcon />
                    <p>Image Uploaded</p>
                  </>
                )
              }
                
              </>
            )}
          </CldUploadWidget>
          <input type="text" className='p-2 rounded-md text-yellow-500 outline-none hidden' placeholder='SAMPLE PUBLIC ID' />
        </div>

        <label htmlFor='size'>Size:</label>
        <select 
          name='size'
          id="size"
          value={size} 
          onChange={(e)=> setSize(e.target.value)} 
          className="input input-bordered input-md w-full max-w-xs"
        >
          <option value="Select">Select</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="big">Big</option>
        </select>
        <div className='flex gap-4'>
          <button type="submit" className='btn btn-neutral'>
            <PackagePlusIcon />
            Add Award
          </button>
          <button type="button" className='btn btn-neutral hover:text-white hover:btn-warning' onClick={()=>router.push("/admin/viewMedia")}>
            <ImagesIcon />
            View Media
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
