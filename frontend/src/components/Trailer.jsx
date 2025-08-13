const Trailer = ({trailer}) => {
  return (
    <div className="aspect-video rounded-lg overflow-hidden w-full">
      <iframe
        src={trailer}
        title="Trailer"
        className="w-full h-full"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Trailer;
