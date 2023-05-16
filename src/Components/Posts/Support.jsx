import style from "./Support.module.css"


export default function Support(props) {
    return (
        <div className="col-lg-6 col-sm-12 mb-5">
            <div className="row">
                <div className="col-3 d-flex justify-content-center align-items-start">
                    <img src={props.icon} alt='' className={style.image} />
                </div>
                <div className="col-9">
                    <h3 className={style.heading}>{props.title}</h3>
                    <p className={style.title}>{props.desc}</p>
                </div>
            </div>
        </div>
    )
}