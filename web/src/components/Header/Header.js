const Header = () => {
  const navItem = [
    'National',
    'Education',
    'Sports',
    'Crime',
    'Health',
    'Entertainment',
    'Education',
    'Sports',
    'Crime',
    'Health',
    'Entertainment',
  ]
  return (
    <nav className="flex  bg-black ">
      <span className="text-white items-center ">CITIZEN AWAAZ</span>
      <ul className="flex-auto flex flex-col justify-evenly  p-1 items-center sm:flex-row">
        {navItem.map((item, index) => {
          return (
            <p key={index} className="text-white text-sm">
              {item}
            </p>
          )
        })}
      </ul>
    </nav>
  )
}

export default Header
