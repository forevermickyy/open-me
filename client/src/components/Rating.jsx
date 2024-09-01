import React from 'react'

const Rating = () => {
  return (
    <div className=''>
    <div className="flex justify-center mt-10 avatar-group -space-x-3 w-200 rtl:space-x-reverse">
  <div className="avatar">
    <div className="w-12">
      <img src="./refs/r1.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="./refs/r2.png" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="./refs/r3.png" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="bg-neutral text-neutral-content w-12">
      <span>+30</span>
    </div>
  </div>
</div>
    <div className="mt-4 rating flex justify-center">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-violet-200"
    defaultChecked />
   <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-violet-400"
    defaultChecked />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-blue-400"
    defaultChecked />
   <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-green-400"
    defaultChecked />
</div>
<div>
    <p className='text-center text-white font-semibold'>
        Generated $250K+ In The Last <br/> 40 Days For Ambitious Founders</p>
</div>
</div>
  )
}

export default Rating