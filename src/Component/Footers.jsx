const Foot = (feet) => {
    return(
        <div>
            <h6 className={feet.un}>{feet.txt}</h6>
            <p className={feet.guni}>{feet.txtgun}</p>
            <p className={feet.guni}>{feet.txtgn}</p>
            <p className={feet.guni}>{feet.quiz}</p>
            <p className={feet.guni}>{feet.refer}</p>
            <p className={feet.guni}>{feet.reward}</p>
            <p className={feet.guni}>{feet.private}</p>
        </div>
    )
}
export default Foot;