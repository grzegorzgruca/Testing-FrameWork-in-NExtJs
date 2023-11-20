import Link from "next/link";

async function apiData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
}

export default async function List(props) {
  let data = await apiData();

  return (
    <>
      {data && (
        <>
          <p className="text-white m-5 text-center pb-20">
            This is Test 4s asynchornized Page
          </p>
          <Link
            className="bg-gray-100 text-black p-4.5 rounded-2xl p-5 w-fit text-center"
            href="/"
          >
            Move to Home Page
          </Link>
        </>
      )}
    </>
  );
}
