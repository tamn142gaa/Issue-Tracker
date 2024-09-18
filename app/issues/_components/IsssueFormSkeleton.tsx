import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const IsssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default IsssueFormSkeleton;
