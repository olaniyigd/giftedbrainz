const Aca = (demo) => {
    return(
        <div>
            <img src={demo.image} alt={demo.alt} className="img"/>
            <h2 className={demo.class}>{demo.title}</h2>
            <p className={demo.para}>{demo.paragrap}</p>
            <button className={demo.btn}>{demo.text}</button>
        </div>
    )
}
export default Aca;