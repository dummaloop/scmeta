import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return(
        <div>
            <h1 className={headerStyles.title}><span>Hello</span> there</h1>
            <style jsx>
                {`
                    .title {
                        color: red;
                    }
                `}
            </style>
        </div>
    )
}

export default Header