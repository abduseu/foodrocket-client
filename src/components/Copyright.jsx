const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="text-center font-light">
            <small>&copy; {currentYear} Abdus Salam. All rights reserved.</small>
        </div>
    );
};

export default Copyright;