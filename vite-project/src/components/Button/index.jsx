import Button from "./Component";

const Index = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-start">
        <span>Primary Button</span>
        <Button
          title="Primary"
          onClick={() => {
            alert("Clicked");
          }}
        />
      </div>

      <div className="flex flex-col items-start">
        <span>Primary Outlined </span>
        <Button
          title="Primary Outlined"
          onClick={() => {
            alert("Clicked");
          }}
          variant="outlined"
          textColor="primary"
        />
      </div>

      <div className="flex flex-col items-start">
        <span>Disabled Button </span>
        <Button title="Disabled" disabled />
      </div>

      <div className="flex flex-col items-start">
        <span>Rounded </span>
        <Button title="Rounded" rounded="full" />
      </div>

      <div className="flex flex-col items-start">
        <span>Custom Background Button</span>
        <Button title="Custom Background" color="#5D9C59" />
      </div>

      <div className="flex flex-col items-start">
        <span>Custom Text</span>
        <Button title="Custom Text" textColor="#BFCCB5" color="#393646" />
      </div>
    </div>
  );
};
export default Index;
