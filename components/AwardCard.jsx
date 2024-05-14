'use client'
import { BaggageClaimIcon } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { useToast } from "./ui/use-toast"

const AwardCard = ({ award, setCart, cart }) => {
  const { toast } = useToast();

  useEffect(() => {
    if(cart.length > 0) {
      toast({
        title: "New Award added to cart !",
        description: `Award ${award.name} is added to the cart.`
      });
    }
  }, [cart]);

  const handleCartClick = () => {
    setCart(prevCart => [...prevCart, award._id]);
  };

  return (
    <div className="hover:scale-95 transition-all card w-max h-max bg-base-100 shadow-xl">
      <figure>
        <Image alt={`${award.name}-trophy`} src={award.trophyImage} width={200} height={200} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {award.name}
          <div className="badge badge-secondary">{award.category}</div>
        </h2>
        <p>Price &#x20b9; {award.price}.00</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{award.size}</div>
        </div>
        <div className="w-full">
          <button type="button" className="w-full btn btn-outline" onClick={handleCartClick}>
            <BaggageClaimIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default AwardCard;
