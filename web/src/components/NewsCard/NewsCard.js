const NewsCard = ({ data : {title, image } }) => {
  return (
    <div className="bg-gray-100 shadow-sm mx-auto max-w-xs rounded-sm flex flex-col">
      <img src={image} />
      <h1 className="p-1 font-medium text-lg" >{title} randome text scndskfn kjvdns k fvkds basbf fbasjknfkw  </h1>
    </div>
  )
}

export default NewsCard
