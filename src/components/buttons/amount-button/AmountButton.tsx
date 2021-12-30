const MbAmountButton = () => {
  return (
    <div className="flex items-center space-x-24">
      <button className="bg-black rounded w-8 h-7 flex justify-center items-center hover:bg-blue-300 dark:bg-white dark:hover:bg-blue-100 focus:border-2 focus:border-blue-100-15">
        <span className="p-big-90 text-white dark:text-black">-</span>
      </button>
      <div className="h2-90 dark:text-white">1</div>
      <button className="bg-black rounded w-8 h-7 flex justify-center items-center hover:bg-blue-300 dark:bg-white dark:hover:bg-blue-100 focus:border-2 focus:border-blue-100-15">
        <span className="p-big-90 text-white dark:text-black">+</span>
      </button>
    </div>
  )
}

export default MbAmountButton
