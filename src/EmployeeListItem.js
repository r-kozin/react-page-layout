

export default function EmployeeListItem({image, name, title}){
    return(
        <div style={{display: "flex",
        flexDirection: "row",
        border: "1px solid",
        padding: '0 3.5rem 0 1.5rem',
        margin: "0 5% 1%"}}>
            <img className="proPicSmall" src={image} alt="image" />
            <div>
                <h3>{name}</h3>
                <p className="eListTitle">{title}</p>
            </div>
        </div>
    )
}