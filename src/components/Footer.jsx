
const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <div>
      <footer className="bg-gray-950 text-gray-500 text-center
      p-6 border-t border-gray-800">
        <p className="text-sm">
          &copy; {year}, All rights reserved |    
          <span className="text-orange-400 text-sm ml-2">
             SUV e-Commerce Solution
          </span>
        </p>
      </footer>
    </div>
  )
}

export default Footer