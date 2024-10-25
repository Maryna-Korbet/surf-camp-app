const InfoBlock = ({ data }) => {
    const { headline, image, text, button, reversed } = data;

    return (
        <div className={`info ${reversed ? "info--reversed" : ""}`}>
            {image}
            <div className="info__text">
                <h2 className="info__headline">{headline}</h2>
                {text}
                {button}
            </div>
        </div>
    );
};

export default InfoBlock;