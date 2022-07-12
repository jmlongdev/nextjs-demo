import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // example for using newsId
  // send request to the backend API
  // to fetch the news iteh with newsId

  return (
    <div>
      <h1>The Details Page</h1>
      <p>{newsId}</p>
    </div>
  );
};

export default DetailsPage;
