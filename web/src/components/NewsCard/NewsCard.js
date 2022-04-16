const NewsCard = ({ data: { title, image } }) => {
  return (
    <div className="flex flex-col gap-4 sm:row-span-3">
      <img src={image} className="shadow-sm rounded-sm" />
      <h1 className="p-1 font-medium text-xl">
        {title} randome text scndskfn kjvdns k fvkds basbf fbasjknfkw{' '}
      </h1>
    </div>
  )
}

export default NewsCard
