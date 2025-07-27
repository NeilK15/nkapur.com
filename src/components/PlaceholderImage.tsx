interface PlaceholderImageProps {
    alt: string;
    className?: string;
    icon?: string;
    text?: string;
}

const PlaceholderImage = ({
    alt,
    className = '',
    icon = '📷',
    text = 'Image',
}: PlaceholderImageProps) => {
    return (
        <div className={`placeholder-image ${className}`}>
            <div className="placeholder-content">
                <div className="placeholder-icon">{icon}</div>
                <div className="placeholder-text">{text}</div>
            </div>
        </div>
    );
};

export default PlaceholderImage;
