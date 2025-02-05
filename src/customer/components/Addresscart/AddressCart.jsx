import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-700 ">

      <div className="mt-3 space-y-2 text-gray-700">
        <p className="font-semibold text-white ">
          {address?.firstName || "John"} {address?.lastName || "Doe"}
        </p>

        <p className="text-sm text-white opacity-70">
          {address?.streetAddress || "123 Street Name"}, {address?.city || "City"},{" "}
          {address?.state || "State"} - {address?.zipCode || "000000"}
        </p>

        <div className="space-y-1 text-white opacity-80">
          <p className="font-semibold text-white opacity-80">Phone Number</p>
          <p className="text-sm">{address?.mobile || "9876543210"}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
