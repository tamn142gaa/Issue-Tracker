import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <>
      <Skeleton />
      <Flex className="space-x-3" my="2">
        <Skeleton />
        <Skeleton />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton />
      </Card>
    </>
  );
};

export default LoadingIssueDetailPage;
