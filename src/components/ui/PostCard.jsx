import React from "react";
import { Flex, Tag } from 'antd';


const PostCard = ({ src, title, price, }) => {
  return (
    <div className="group cursor-pointer m-2 bg-white rounded shadow'
     /overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          className="w-full aspect-video object-cover duration-300 group-hover:scale-110"
          alt={title}
          src={src}
        />

      </div>

      <div className="px-4 py-3 flex flex-col">
        <p className="text-lg md:text-xl font-bold text-gray-900 line-clamp-1">
          {title}
        </p>
        <Flex gap="4px 0" wrap>
          <Tag  bordered={true} color="processing">This is test</Tag>
        </Flex>

      </div>
    </div>
  );
};

export default PostCard;
