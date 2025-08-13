const Banner = ({bannerImage,title}) => (
    <div className="bottom-fade h-full w-full   relative">
              <img
                src={bannerImage}
                alt={title}
                className="w-full h-full object-cover"
              />
    </div>
)

export default Banner;