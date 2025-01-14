function MyBanner() {
  return (
    <div className="h-screen w-screen bg-banner bg-cover flex sm:justify-end opacity-0 animate-fadeIn delay-1000">
      <h1
        id="top"
        className="text-5xl text-white font-bold my-6 translate-y-20 md:mr-4 opacity-0 animate-fadeIn delay-1000"
      >
        Welcome to MARS Web Development
      </h1>
    </div>
  );
}

export default MyBanner;
