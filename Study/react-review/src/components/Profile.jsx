import React from 'react';

export default function Profile({
  image,
  name,
  title,
  size = 200,
  isnew = false,
}) {
  return (
    <div className='profile'>
      <Avatar isnew={isnew} image={image} size={size} />
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

export const Avatar = ({ image, isnew = false, size = 200 }) => {
  return (
    <div className='avatar'>
      {isnew && <div className='new-dev text-xl font-bold'>new</div>}
      <img src={image} alt='avatar' className='photo' width={size} />
    </div>
  );
};
