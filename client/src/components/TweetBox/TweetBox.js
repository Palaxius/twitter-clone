import React from 'react';
import './TweetBox.scss'
import {Avatar, Button} from "@material-ui/core";


const TweetBox = () => {
  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox__input">
          <Avatar src='data:image/png;base64,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'/>
          <input type="text" placeholder="What's happening?"/>
        </div>
        <input
          className='tweetBox__input-image'
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <Button className='tweetBox__btn'>Tweet</Button>
      </form>
    </div>
  );
};

export default TweetBox;