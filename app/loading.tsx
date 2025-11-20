import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src="/icons/favicon.ico"
        alt="Loading..."
        width={80}
        height={80}
        className="animate-pulse"
      />
    </div>
  );
};

export default Loading;