const Cat = (pro)=>{
    return(
        <div>
            <img src={pro.image} alt={pro.alt} className={pro.class}/>
            <p className={pro.para}>{pro.paragraph}</p>
        </div>
    )
}
export default Cat;
