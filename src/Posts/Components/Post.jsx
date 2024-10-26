import { Tooltip } from 'react-tooltip';
import { PiUserCircleThin } from 'react-icons/pi';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { TbMessageCircle } from 'react-icons/tb';
import { LiaRetweetSolid } from 'react-icons/lia';
import { CiHeart, CiBookmark } from 'react-icons/ci';
import { BiBarChart } from 'react-icons/bi';
import { RiShare2Line } from 'react-icons/ri';

export const Post = () => {
  return (
    <>
      <div className="flex px-4 border-l-2 border-r-2 border-b-2 w-[634px] min-h-[124px]">
        <div className="pt-3 mr-2">
          <PiUserCircleThin className="w-10 h-10 text-5xl" />
        </div>
        <div className="flex-1 flex flex-col justify-center pt-2">
          <div className="flex">
            {/* Agregar fecha, de momento solo la hora */}
            <span className="flex-1">Lorem @Lorem · 23h</span>
            <HiOutlineDotsHorizontal
              data-tooltip-id="tooltip-more"
              data-tooltip-content="More"
              data-tooltip-place="bottom"
              className="w-5 h-5 cursor-pointer"
            />
            <Tooltip id="tooltip-more" />
          </div>
          <div className="py-3">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae perspiciatis, veniam debitis illum laboriosam
              voluptate in modi quis temporibus dolorum explicabo consequatur!
              Fuga repellendus cumque delectus natus hic a qui.
            </span>
          </div>
          <div className="pb-2">
            <div className="flex mt-2">
              <div className="flex-1 flex text-gray-500 gap-24">
                <div className="flex items-center">
                  <TbMessageCircle
                    data-tooltip-id="tooltip-reply"
                    data-tooltip-content="Reply"
                    data-tooltip-place="bottom"
                    className="w-5 h-5 cursor-pointer outline-none"
                  />
                  <Tooltip id="tooltip-reply" />
                  <span>4</span>
                </div>

                <div className="flex items-center">
                  <LiaRetweetSolid
                    data-tooltip-id="tooltip-repost"
                    data-tooltip-content="Repost"
                    data-tooltip-place="bottom"
                    className="w-5 h-5 cursor-pointer outline-none"
                  />
                  <Tooltip id="tooltip-repost" />
                  <span>1</span>
                </div>

                <div className="flex items-center">
                  <CiHeart
                    data-tooltip-id="tooltip-like"
                    data-tooltip-content="Like"
                    data-tooltip-place="bottom"
                    className="w-5 h-5 cursor-pointer outline-none"
                  />
                  <Tooltip id="tooltip-like" />
                  <span>267</span>
                </div>

                <div className="flex items-center">
                  <BiBarChart
                    data-tooltip-id="tooltip-view"
                    data-tooltip-content="View"
                    data-tooltip-place="bottom"
                    className="w-5 h-5 cursor-pointer outline-none"
                  />
                  <Tooltip id="tooltip-view" />
                  <span>10K</span>
                </div>
              </div>
              <div className="flex gap-3">
                <CiBookmark
                  data-tooltip-id="tooltip-bookmark"
                  data-tooltip-content="Bookmark"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer outline-none"
                />
                <Tooltip id="tooltip-bookmark" />

                <RiShare2Line
                  data-tooltip-id="tooltip-share"
                  data-tooltip-content="Share"
                  data-tooltip-place="bottom"
                  className="w-5 h-5 cursor-pointer outline-none"
                />

                <Tooltip id="tooltip-share" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
