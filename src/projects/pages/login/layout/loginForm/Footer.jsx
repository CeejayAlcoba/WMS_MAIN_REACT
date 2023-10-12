import Alert from "../../../../components/Alert";
import Button from "../../../../components/Button";

export default function Footer({errorMessage,buttonStyle,alertStyle}){

    return(
        <>
        {errorMessage && (
          <Alert severity={"error"} sx={alertStyle}>
            {errorMessage}
          </Alert>
        )}

        <Button
          type={"submit"}
          isLoading={false}
          label={"login"}
          sx={buttonStyle}
        />
      </>
    )
}