import React from 'react'

const Bill = () => {
  return (
    // bill should not be rendered for single organisation
    <div>
        <p className='text-center'>Bill To: <span className='font-bold'>ASTER PUBLIC SCHOOL KP 5</span></p>
        <p className='text-center'>Date: <span className='font-bold'>24/4/2024</span></p>

        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>KP - 5 Scholar Badges</td>
                    <td>495 pc</td>
                    <td>&#x20b9;30</td>
                    <td>495 x &#x20b9; 30 = &#x20b9; 14,850</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>NE - Scholar Badges</td>
                    <td>550 pc</td>
                    <td>&#x20b9;30</td>
                    <td>550 x &#x20b9; 30 = &#x20b9; 16,500</td>
                </tr>
                </tbody>
            </table>
            <div className='text-center'>
                <p>Total Quantity: 1045 pc</p>
                <p>Price (per piece) : &#x20b9; 30</p>
                <p className='text-red-600'>Total Amount to pay: 1045 x 30 = <span className='font-bold text-lime-600'> &#x20b9; 31350</span></p>
            </div>
        </div>
    </div>
  )
}

export default Bill