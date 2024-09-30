import Pagination from "./components/Pagination";

interface Props {
  searchParams: { page: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <Pagination
      itemCount={2}
      currentPage={parseInt(searchParams.page)}
      pageSize={2}
    />
  );
}
