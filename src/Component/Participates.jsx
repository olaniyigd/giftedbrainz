const Parte = (Part) =>{
    return(
        <div>
            <h2 className={Part.head}>{Part.heading}</h2>
            <p className={Part.text}>{Part.parag}</p>
        </div>

    )
}
export default Parte;