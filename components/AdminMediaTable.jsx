'use client';
import { deleteMediaAction } from '@/actions/deleteMediaAction';
import React from 'react';
import { useToast } from './ui/use-toast';
import AwardEditModal from './AwardEditModal';
import { PackageXIcon, PlusCircleIcon} from 'lucide-react';
import { useRouter } from 'next/navigation';

const AdminMediaTable = ({ awardList, setAwardList }) => {
  const router = useRouter();
  const {toast}  = useToast();
  const handleDelete = (awardId,mId) => {
    const updatedList = awardList.filter((award) => award._id !== awardId);
    setAwardList(updatedList);

    deleteMediaAction(awardId,mId).then(() => {
        toast({
            title: "Award Deleted",
            description: "Award Removed from catalog.",
        });
    }).catch((error) => {
        toast({
            title: "Error",
            description: "Unable to Delete Award.",
        });
        console.log(error);
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Size</th>
            <th>Sample Id</th>
            <th>Available</th>
            <th>Category</th>
            <th className='flex items-center justify-evenly'>
              Action
              <span onClick={()=>router.push("/admin/addProduct")} title="Add Award" className='hover:text-lime-500'>
                <PlusCircleIcon />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {awardList.map((award) => (
            <tr key={award._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={award.trophyImage} alt="Trophy" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{award.name}</div>
                  </div>
                </div>
              </td>
              <td>{award.price}</td>
              <td>{award.size.toUpperCase()}</td>
              <td>{award.publicId}</td>
              <td>
                <p className='badge badge-outline'>
                  {award.isAvailable ? 'Yes' : 'No'}
                </p>
              </td>
              <td>
                <p className='badge badge-info text-white'>{award.category}</p>
              </td>
              <td className='flex gap-2'>
                <button title="Delete Award" onClick={() => handleDelete(award._id,award.publicId)} className='btn-error btn text-white'>
                  <PackageXIcon />
                </button>
                <AwardEditModal awardData={award}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMediaTable;
