'use client';
import { SquareMinusIcon, SquarePlusIcon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import { useToast } from './ui/use-toast';
import Bill from '@/models/bill';

const MultiFieldForm = ({colums,dateTime}) => {
    const [formFields, setFormFields] = useState([
       { awardName: '', quantity: 0, price: 0 }
    ]);
    const [newInputField, setNewInputField] = useState(1);
    const [orgName, setOrgName ] = useState("");
    const handleOnChange = (event, index) => {
        const { name, value } = event.target;
        const newData = [...formFields];
        newData[index] = { ...newData[index], [name]: value };
        setFormFields(newData);
    };

  const deleteFormField = (index) => {
    if(formFields.length > 1) {
        const newFormFields = [...formFields];
        newFormFields.splice(index, 1);
        setFormFields(newFormFields);
    }
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   const billData = {
  //     billingDate: dateTime,
  //     billedTo: orgName,
  //     orders: formFields.map(({ awardName, quantity, price }) => ({
  //       awardName,
  //       quantity: parseInt(quantity), 
  //       price: parseFloat(price),
  //       subTotal: parseInt(quantity) * parseFloat(price),
  //     })),
  //     totalOrderPrice: formFields.reduce((total, { quantity, price }) => {
  //       return total + (parseInt(quantity) * parseFloat(price));
  //     }, 0)
  //   };
  
  //   try {
  //     const response = await Bill.create(billData);
  //     console.log("Bill created successfully:", response);
  //   } catch (error) {
  //     console.error("Error creating bill:", error);
  //   }
  // };
const clearFormField = (index) => {
  const newFormFields = [...formFields];
  newFormFields[index] = { awardName: '', quantity: 0, price: 0 };
  setFormFields(newFormFields);
};


  const handleMultiFieldAddition = () => {
    if (newInputField > 1) {
      setFormFields(prevFormFields => {
        const newFields = [];
        for (let i = 0; i < newInputField; i++) {
          newFields.push({ awardName: '', quantity: 0, price: 0 });
        }
        return [...prevFormFields, ...newFields];
      });
      setNewInputField(1);
    }
    else {
      setFormFields([...formFields,{awardName: '', quantity: 0, price: 0}]);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='w-max flex flex-col gap-4'>
        <label htmlFor="orgName" className='text-center'>
            Billed to
            <input id='orgName' className='input input-bordered input-md ml-4' value={orgName} onChange={(e)=>{setOrgName(e.target.value)}}></input>
        </label>
        <div className='w-4/5 flex items-center justify-evenly'>
            {colums.map((col,index)=>(
                <span key={index}>{col}</span>
            ))}
        </div>
    {formFields.map((form, index) => (
      <div key={index} className='flex text-center gap-4'>
        <input
          className='input input-bordered input-md max-w-xs'
          type='text'
          name='awardName'
          placeholder="Award Name"
          value={form.awardName}
          onChange={event => handleOnChange(event, index)}
          required
        />
        <input
          className='input input-bordered'
          type='number'
          name='quantity'
          placeholder='Quantity'
          value={form.quantity}
          onChange={event => handleOnChange(event, index)}
          required
          min={0}
          max={1200}
        />
        <input
          className='input input-bordered'
          type='number'
          name='price'
          placeholder='Price'
          value={form.price}
          onChange={event => handleOnChange(event, index)}
          required
          min={0}
          max={12000}
        />
        <button title='delete field' className='btn btn-error text-white' type="button" onClick={() => deleteFormField(index)}>
          <Trash2Icon />
        </button>
        <button title='clear field' className='btn btn-accent text-white' type='button' onClick={() => clearFormField(index)}>
          <SquareMinusIcon />
        </button>
      </div>
    ))}
    <div className='flex gap-5'>

      <div className='w-1/6 border bg-amber-500 hover:bg-amber-600 hover:cursor-pointer flex items-center justify-center gap-2 rounded-md'>
        <input type='number' onChange={(e)=>setNewInputField(e.target.value)} value={newInputField} className='text-center input input-sm w-1/2' max={10}></input>
      <button title='add field' onClick={handleMultiFieldAddition}>
        <SquarePlusIcon className='text-white'/>
      </button>
      </div>

      <button className='btn btn-success text-white' type="submit">Submit</button>

    </div>
  </form>
  )
}

export default MultiFieldForm