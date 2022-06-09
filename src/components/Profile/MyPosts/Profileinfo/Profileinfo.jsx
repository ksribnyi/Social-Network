import s from './Profileinfo.module.css'


const Profileinfo = () => {
    return (
        <div>
            <div className={s.backimg}>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'></img>
            </div>
            <div className={s.discription_block}>
                <div className={s.user}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'></img>
                </div>
                <div>
                    ava + infa
                </div>

            </div>
        </div>
    )
}

export default Profileinfo;