export default function Banner(){
    return(
        <>
            <div className="w-[100%] h-[100vh] relative flex justify-center items-center banner">
                <video autoPlay loop playsInline muted className="absolute right-0 bottom-0 w-[100%] h-[100%] object-cover z-[-1]">
                    <source src="/assets/space.mp4" type="video/mp4" />
                </video>

                <div className="text-center">
                    <h2 className="text-[#fff] text-[160px]">Planets</h2>
                </div>
            </div>
        </>
    )
}