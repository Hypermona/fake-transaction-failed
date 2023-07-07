import Error from "../components/gpay/Error";
import errors from "../Constants/gpay/errors";
import PrevNextButton from "../components/PrevNextButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Errors() {
  const error = useSelector((state) => state.error);
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);
  console.log(state);
  return (
    <div>
      {errors.map((error) => (
        <Error
          key={error.id}
          id={error.id}
          title={error.title}
          signal={error.signal}
          subtitle={error.subtitle}
          description={error.description}
          buttons={error.buttons}
          elevation={1}
        />
      ))}
      <div style={{ position: "sticky", bottom: 30 }}>
        {error && (
          <PrevNextButton
            prev={{ to: `/pays`, text: "back", state: { upi: state?.upi } }}
            next={{ to: `/payment`, text: "Save & Next", state: { upi: state?.upi } }}
          />
        )}
      </div>
    </div>
  );
}

export default Errors;
