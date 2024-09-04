import { useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { CgProfile } from 'react-icons/cg';
import { BiWorld, BiPoll } from 'react-icons/bi';
import { GoFileMedia } from 'react-icons/go';
import { MdOutlineGifBox } from 'react-icons/md';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { RiCalendarScheduleLine } from 'react-icons/ri';
import { IoLocationOutline } from 'react-icons/io5';

const Tweet = () => {
  const textAreaRef = useRef();

  const [textAreaVal, setTextAreaVal] = useState('');

  const onTextAreaChange = (e) => {
    setTextAreaVal(e.target.value);
  };

  useEffect(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, [textAreaVal]);

  return (
    <>
      <h1>Tweet component</h1>
      <div className="flex border-2 border-red-600 w-96">
        <div>
          <CgProfile className="text-5xl" />
        </div>
        <div className="flex-1">
          <div>
            <textarea
              className="resize-none border-none outline-0"
              placeholder="What is happening?!"
              value={textAreaVal}
              onChange={onTextAreaChange}
              rows="1"
              ref={textAreaRef}
              maxLength={280}
            ></textarea>
          </div>
          <div>
            <div>
              <span className="text-sky-500">
                <BiWorld /> Everyone can reply
              </span>
            </div>
            <div className="flex">
              <div className="flex-1 flex text-sky-500 space-x-2">
                <GoFileMedia
                  data-tooltip-id="tooltip-media"
                  data-tooltip-content="Media"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-media" />

                <MdOutlineGifBox
                  data-tooltip-id="tooltip-gif"
                  data-tooltip-content="GIF"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-gif" />

                <BiPoll
                  data-tooltip-id="tooltip-poll"
                  data-tooltip-content="Poll"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-poll" />

                <HiOutlineEmojiHappy
                  data-tooltip-id="tooltip-emoji"
                  data-tooltip-content="Emoji"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-emoji" />

                <RiCalendarScheduleLine
                  data-tooltip-id="tooltip-schedule"
                  data-tooltip-content="Schedule"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-schedule" />

                <IoLocationOutline
                  data-tooltip-id="tooltip-location"
                  data-tooltip-content="Location"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer"
                />
                <Tooltip id="tooltip-location" />
              </div>
              <div>Post</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
