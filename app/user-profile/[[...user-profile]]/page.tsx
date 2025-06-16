import React from "react";
import { UserProfile } from "@clerk/nextjs";

export default function UserProfilePage() {
  return (
    <div className="flex justify-center my-4">
      <UserProfile path="/user-profile" />
    </div>
  );
}
