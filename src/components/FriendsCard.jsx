import React from "react";
import { Link } from "react-router-dom";
import { NoProfile } from "../assets";

const FriendsCard = ({ friends }) => {
  return (
    <div>
      <div classNameName="w-full bg-primary shadow-sm rounded-lg px-6 py-5">
        <div classNameName="flex items-center justify-between text-ascent-1 pb-2 border-b border-[#66666645]">
          <span> Friends</span>
          <span>{friends?.length}</span>
        </div>

        <div classNameName="w-full flex flex-col gap-4 pt-4">
          {friends?.map((friend) => (
            <Link
              to={"/profile/" + friend?._id}
              key={friend?._id}
              classNameName="w-full flex gap-4 items-center cursor-pointer"
            >
              <img
                src={friend?.profileUrl ?? NoProfile}
                alt={friend?.firstName}
                classNameName="w-10 h-10 object-cover rounded-full"
              />
              <div classNameName="flex-1">
                <p classNameName="text-base font-medium text-ascent-1">
                  {friend?.firstName} {friend?.lastName}
                </p>
                <span classNameName="text-sm text-ascent-2">
                  {friend?.profession ?? "No Profession"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsCard;
