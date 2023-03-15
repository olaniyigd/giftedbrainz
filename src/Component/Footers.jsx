const Foot = (feet) => {
    return(
        <div>
            <h6 className={feet.un}>{feet.txt}</h6>
            <p className={feet.gun}>{feet.txtgun}</p>
            <p className={feet.gun}>{feet.txtgn}</p>
            <p className={feet.gun}>{feet.quiz}</p>
            <p className={feet.gun}>{feet.refer}</p>
            <p className={feet.gun}>{feet.reward}</p>
            <p className={feet.gun}>{feet.private}</p>
        </div>
    )
}
export default Foot;