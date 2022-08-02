import FormComponent from "./form-component";
import TextComponent from "./text-component";

export default  function CardComponent(){
    return (
        <div className="card">
            <TextComponent />
            <FormComponent />
        </div>
    )
}