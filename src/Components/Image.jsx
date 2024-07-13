import { useState } from "react"

function Image(){



    const[index, setIndex]= useState(0)
    

    const handleNext = ()=>{
        if(index < images.length -1){
        setIndex(index + 1)
        }
    }
    const handlePrev = ()=>{
        if(index > 0){

            setIndex(index - 1)

        }
        
    }



    const images =["https://images.pexels.com/photos/2564889/pexels-photo-2564889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",


        "https://images.pexels.com/photos/6658230/pexels-photo-6658230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",


        "https://images.pexels.com/photos/1213921/pexels-photo-1213921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",


        "https://images.pexels.com/photos/11630697/pexels-photo-11630697.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    ]








    return <div className="flex justify-center">
        <div className="text-center">

        
        <div>
            <img className="bg-orange-500 sm:w-[900px] w-[350px] object-cover sm:h-[390px] rounded-xl mt-10" src= {images[index]} />
        </div>
        <button onClick={handleNext} className="bg-sky-500 h-10 w-24 mt-16   rounded  m-5 text-white text-3xl">Next</button>
        <button onClick={handlePrev} className="bg-sky-500 h-10 w-24 mt-16  rounded  m-5 text-white text-3xl">Prev</button>
        </div>
    </div>
}

export default Image