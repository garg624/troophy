'use client'
import { BaggageClaimIcon } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"
import { useToast } from "./ui/use-toast"

const AwardCard = ({ award, cart, setCart }) => {
  const { toast } = useToast();



  const handleCartClick = () => {
    let currentCart = JSON.parse(localStorage.getItem('cart'));
    if(!currentCart.includes(award._id)) {
      currentCart = [...currentCart,award._id];
      localStorage.setItem('cart',JSON.stringify(currentCart));
      setCart(prevCart => [...prevCart, award._id]);
      toast({
        title: "Award added to cart 🎉",
      })
    }else {
      toast({
        title: "Award already in cart 😎.",
      })
    }
  };

  return (
    <div className="hover:scale-95 transition-all card w-max h-max bg-base-100 shadow-xl rounded-none border">
      <figure>
        <Image alt={`${award.name}-trophy`} src={award.trophyImage} width={200} height={200} style={{width:"auto", height:"auto"}} />
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
          <button type="button" className="w-full btn btn-outline rounded-none" onClick={handleCartClick}>
            <BaggageClaimIcon />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default AwardCard;
