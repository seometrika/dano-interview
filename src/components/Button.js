import styled from "@emotion/styled"

const Link = styled("a")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    gap: "10px",
    backgroundColor: "#3f3f3f",
    color: "#FFFFFF",
    minHeight: "65px",
    minWidth: "200px",
    padding: "5px 30px",
    fontSize: "14px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textTransform:"uppercase",
    "&:hover": {
        backgroundColor: "#e91d2a"
    }
}))

const Button = ({ href, children, icon, onClick }) => {
    return (
        <Link
            href={href}
            target="_blank"
            onClick={onClick}
        >
            <img src={icon} />
            <span>{children}</span>
        </Link>
    )
}

export default Button