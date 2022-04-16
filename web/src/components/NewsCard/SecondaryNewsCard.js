const NewsCard = ({ data: { title, image } }) => {
  return (
    <div className="flex gap-2  sm:gap-4">
      <img src={image} className="shadow-sm rounded-sm w-2/6 sm:w-2/5" />
      <h1 className="font-medium text-base sm:p-1 sm:text-lg">
        {title} randome text scndskfn kjvdns k
      </h1>
    </div>
  )
}

export default NewsCard
