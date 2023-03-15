const Feat = (feats) => {
    return(
        <div>
            <img src={feats.src} alt={feats.alt} className={feats.img}/>
            <h3 className={feats.class}>{feats.head}</h3>
            <p className={feats.texting}>{feats.message}</p>   
        </div>
    )
}
export default Feat;