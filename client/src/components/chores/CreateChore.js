import { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createChore } from "../../managers/choreManager";
import { useNavigate } from "react-router-dom";

export default function CreateChore () {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState(null);
    const [frequency, setFrequency] = useState(null);
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        // a last-ditch way to enforce data validation on the front end:
        // console.log(name, difficulty, frequency);
        // if (!name || !difficulty || !frequency)
        // {
        //     console.log("please input a valid value")
        // }



        const newChoreObj = {
            name: name,
            difficulty: difficulty,
            choreFrequencyDays: frequency
        };

        // console.log(newChoreObj);

        createChore(newChoreObj).then((res) => {
            if (res.errors) {
                setErrors(res.errors);
            } else {
                navigate("/chores");
            }
        }); 
    }

    
    return (
    <>
        <Form>
            <FormGroup>
                <Label>
                    Chore name:
                </Label>
                <Input 
                    id="choreName"
                    name="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Label>
                    Difficulty:
                </Label>
                <Input
                    id="choreDifficulty"
                    name="difficulty"
                    type="select"
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option>select...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label>
                    Frequency:
                </Label>
                <Input 
                    id="choreFrequency"
                    name="frequency"
                    type="number"
                    onChange={(e) => setFrequency(e.target.value)}
                />
            </FormGroup>
            <Button
                id="submitButton"
                color="success"
                onClick={(e) => handleSubmit(e)}>
                Submit
            </Button>
        </Form>
        {errors ? (
            <div style={{ color: "red" }}>
            {Object.keys(errors).map((key) => (
                <p key={key}>
                {key}: {errors[key].join(",")}
                </p>
            ))}
        </div>
        ) : "" }
    </>
    )
}