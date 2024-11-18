"use client";
import UserPosts from "@/components/Dashcomponents/UserPosts/UserPosts";
import UserProfileInfo from "@/components/Dashcomponents/UserProfileInfo/UserProfileInfo";

const dashboard = () => {
  return (
    <div>
      <UserProfileInfo />
      <UserPosts />
    </div>
  );
};

export default dashboard;
