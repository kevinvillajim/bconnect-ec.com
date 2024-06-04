export default function BannerS({ img }) {
  return (
    <>
      <div className="w-screen h-[15%] bg-fixed flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src={img}
          alt="Banner"
        />
      </div>
    </>
  );
}
