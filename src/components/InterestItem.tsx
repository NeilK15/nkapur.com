interface InterestItemProps {
    title: string;
    image: string;
    link?: string;
    children?: string;
}

const InterestItem = ({ title, image, link, children }: InterestItemProps) => {
    return (
        <a className="interest-item" href={link} target="_blank">
            <div className="interest-image">
                <img className="interest-img" src={image} />
            </div>
            <div className="interest-content">
                <h4>{title}</h4>
                <p>{children}</p>
            </div>
        </a>
    );
};

export default InterestItem;
