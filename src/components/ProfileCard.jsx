import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import {
  BsBriefcase,
  BsFacebook,
  BsInstagram,
  BsPersonFillAdd,
} from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";

import { NoProfile } from "../assets";
import { UpdateProfile } from "../redux/userSlice";

const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div classNameName="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div classNameName="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <Link to={"/profile/" + user?._id} classNameName="flex gap-2">
            <img
              src={user?.profileUrl ?? NoProfile}
              alt={user?.email}
              classNameName="w-14 h-14 object-cover rounded-full"
            />

            <div classNameName="flex flex-col justify-center">
              <p classNameName="text-lg font-medium text-ascent-1">
                {user?.firstName} {user?.lastName}
              </p>
              <span classNameName="text-ascent-2">
                {user?.profession ?? "No Profession"}
              </span>
            </div>
          </Link>

          <div classNameName="">
            {user?._id === data?._id ? (
              <LiaEditSolid
                size={22}
                classNameName="text-blue cursor-pointer"
                onClick={() => dispatch(UpdateProfile(true))}
              />
            ) : (
              <button
                classNameName="bg-[#0444a430] text-sm text-white p-1 rounded"
                onClick={() => {}}
              >
                <BsPersonFillAdd size={20} classNameName="text-[#0f52b6]" />
              </button>
            )}
          </div>
        </div>

        <div classNameName="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div classNameName="flex gap-2 items-center text-ascent-2">
            <CiLocationOn classNameName="text-xl text-ascent-1" />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          <div classNameName="flex gap-2 items-center text-ascent-2">
            <BsBriefcase classNameName=" text-lg text-ascent-1" />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div classNameName="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <p classNameName="text-xl text-ascent-1 font-semibold">
            {user?.friends?.length} Friends
          </p>

          <div classNameName="flex items-center justify-between">
            <span classNameName="text-ascent-2">Who viewed your profile</span>
            <span classNameName="text-ascent-1 text-lg">
              {user?.views?.length}
            </span>
          </div>

          <span classNameName="text-base text-blue">
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>

          <div classNameName="flex items-center justify-between">
            <span classNameName="text-ascent-2">Joined</span>
            <span classNameName="text-ascent-1 text-base">
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div classNameName="w-full flex flex-col gap-4 py-4 pb-6">
          <p classNameName="text-ascent-1 text-lg font-semibold">
            Social Profile
          </p>

          <div classNameName="flex gap-2 items-center text-ascent-2">
            <BsInstagram classNameName=" text-xl text-ascent-1" />
            <span>Instagram</span>
          </div>
          <div classNameName="flex gap-2 items-center text-ascent-2">
            <FaTwitterSquare classNameName=" text-xl text-ascent-1" />
            <span>Twitter</span>
          </div>
          <div classNameName="flex gap-2 items-center text-ascent-2">
            <BsFacebook classNameName=" text-xl text-ascent-1" />
            <span>Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
