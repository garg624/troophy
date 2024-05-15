import Image from "next/image"

const TrophyLoader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
        <Image priority src={"/loading.gif"} alt="torphy-loader" width={400} height={400} style={{width:500, height: 400}}/>
    </div>
  )
}

export default TrophyLoader