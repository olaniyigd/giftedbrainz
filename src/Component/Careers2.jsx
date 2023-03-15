const Cats = (pre)=>{
    return(
        <div>
            <img src={pre.image} alt={pre.alt} className={pre.class}/>
            <p className={pre.para}>{pre.paragraph}</p>
        </div>
    )
}
export default Cats;