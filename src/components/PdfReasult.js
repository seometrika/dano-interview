import { Stack } from "@mui/material"
import { Document, Page } from "@react-pdf/renderer"

const Item = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "10px",
    ">.number": {
        width: "57px",
        height: "57px",
        borderRadius: "50%",
        backgroundColor: "#3f3f3f",
        fontSize: "30px",
        color: "#ffffff",
        fontWeight: "800",
        fontFamily: "Arial",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    ">.text": {
        flex: "1",
        fontSize: "16px",
        color: "#000000",
        fontFamily: "Arial",
        ">a": {
            color: "#e91d2a"
        }
    },
    "&:not(:last-child)": {
        ">.number": {
            "&::before": {
                content: '""',
                display: "block",
                borderLeft: "dotted #000",
                position: "absolute",
                top: "100%",
                height: "30px",
                opacity: "0.3"
            }
        }
    }
}))

const PdfReasult = ({result}) => {
    return (
        <Document>
            <Page size="A4">
                <Stack spacing={2} marginBottom={4}>
                    {result.map((item, index) => (
                        <Item key={index} elevation={8}>
                            <div className="number">{index + 1}</div>
                            <div className="text" dangerouslySetInnerHTML={{ __html: item }}></div>
                        </Item>
                    ))}
                </Stack>
            </Page>
        </Document>
    )
}

export default PdfReasult