import React from 'react';

function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image='https://plus.unsplash.com/premium_photo-1717529136642-269beec93a32?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='Bob'
          size={200}
        />
        <Avatar
          image='https://plus.unsplash.com/premium_photo-1717529136642-269beec93a32?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          name='Bob'
          size={200}
        />
      </Navbar>
    </div>
  );
}

export default AppWrap;

function Navbar({ children }) {
  return <header style={{ backgroundColor: 'yellow' }}>{children}</header>;
}

function Avatar({ image, name, size = 200 }) {
  return (
    <div className='avatar'>
      <img
        src={image}
        alt={name}
        className='photo'
        width={size}
        height={size}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
}
