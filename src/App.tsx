import { useEffect, useState } from "react"
import calculateDateDifference from "./lib/dateCalculator"

function App() {
  const { years, months, days, seconds} = calculateDateDifference("2020-12-25")
  const hours  = Math.floor(seconds/3600)

  const [actualSeconds, setActualSeconds] = useState(seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setActualSeconds(prev => prev+1)
    }, 1000);

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="flex flex-col items-center">
    <div>
    <div className="flex flex-col mt-12 items-center">
    <h1 className=" relative font-MUSICfont text-8xl">
      Days Since
    </h1>
    <h1 className="font-WLRfont text-primary absolute top-24 text-4xl md:text-6xl"> Whole Lotta Red</h1>
    </div>
    </div>


    <div className="flex flex-col gap-2 text-white font-bold  mt-12 items-center font-MUSICfont tracking-wider text-5xl ">
  <div>
    <h3 className=""><span className="font-MUSICfont text-8xl text-primary tracking-wide">{years.toLocaleString()}</span> YEARS</h3>
  </div>
  <div className="">
    <h3><span className="font-MUSICfont text-6xl text-primary">{months.toLocaleString()}</span> MONTHS</h3>
  </div>
  <div className="">
    <h3><span className="font-MUSICfont text-6xl text-primary">{days.toLocaleString()}</span> DAYS</h3>
  </div>
  <div className="">
    <h3><span className="font-MUSICfont text-6xl text-primary">{hours.toLocaleString()}</span> HOURS</h3>
  </div>
  <div className="">
    <h3><span className="font-MUSICfont text-6xl text-primary">{actualSeconds.toLocaleString()}</span> SECONDS</h3>
  </div>
</div>


    <div className="font-MUSICfont text-4xl tracking-wider mt-8">
      Hes not dropping anytime soon. <span className="text-primary">YVL</span>
    </div>
    </div>
  )
}

export default App
