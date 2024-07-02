import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Image src="/car.jpg" alt="Car Image" width={64} height={64} />
    </>
  );
}
