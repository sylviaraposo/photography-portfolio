function IndividualPhoto(props) {
    return (
        <div>
            <img
                src={props.img}
                alt={props.alt}
            />
        </div>
    )
}

export default IndividualPhoto;