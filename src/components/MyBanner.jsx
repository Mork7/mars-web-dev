function MyBanner() {
  return (
    <div className="h-[600px] w-screen bg-banner bg-fit flex md:justify-end">
      <h1
        id="top"
        className="text-5xl text-white font-bold my-6 md:translate-y-20 md:mr-4 opacity-0 animate-fadeIn delay-1000"
      >
        Welcome to MARS Web Development
      </h1>
    </div>
  );
}

export default MyBanner;
