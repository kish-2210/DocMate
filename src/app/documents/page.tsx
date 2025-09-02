import Link from "next/link";

const Home = () => {
  return (
    <div>
      Click  <Link className="text-blue-400 underline" href={"/documents/123"}> here</Link>
          </div>
  )
}

export default Home;
