import Navigation from './Navigation';
import { BsPlusCircleFill } from 'react-icons/bs';

import { createAvatar } from '@dicebear/core';
import { initials, openPeeps } from '@dicebear/collection';
// import { useState } from 'react';

const Content = () => {
  return (
    <div className='content-container'>
      <Navigation />
      <div className='content-list'>
        <Post
          name='Ada'
          timestamp='one week ago'
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum ut fringilla urna. In varius convallis erat, quis tempus 
            nisi fermentum sit amet. Ut tempus metus vitae ipsum interdum, non 
            hendrerit mauris laoreet. Aenean quis lorem lacus. Ut massa purus, 
            vehicula ut iaculis id, ullamcorper vel leo. Morbi aliquam orci eu velit eleifend,
             nec faucibus mi ultrices. Vivamus gravida lacus in ante mattis, vitae 
             condimentum purus dictum.`}
        />
        <Post name='Leon' timestamp='one week ago' text={`Lorem ipsum dolor. `} />
        <Post name='Jill' timestamp='5 days ago' text={`Lorem.`} />
        <Post
          name='Ellie'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Cras commodo nisi et tempus elementum. Donec tincidunt nisi vel 
            diam vulputate fermentum. `}
        />
        <Post
          name='Chris'
          timestamp='4 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
        <Post
          name='Claire'
          timestamp='2 days ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
        />
        <Post
          name='Albert'
          timestamp='22 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
        />
        <Post
          name='Rebecca'
          timestamp='3 hours ago'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
        />
        <Post
          name='H.U.N.K'
          timestamp='Just now'
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
        />
      </div>
      <BottomBar />
    </div>
  );
};

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://api.dicebear.com/9.x/open-peeps/svg?seed=${seed}`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const avatar = createAvatar(openPeeps, {
  // ... options
});

const svg = avatar.toString();


const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default Content;