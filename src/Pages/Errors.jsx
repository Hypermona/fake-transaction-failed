import Error from "../components/Error";
import errors from "../Constants/errors";

function Errors() {
  console.log(errors);
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
    </div>
  );
}

export default Errors;
