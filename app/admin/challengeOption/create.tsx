import { BooleanInput, Create, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from "react-admin"


export const ChallengeOptionCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput
          source="text"
          validate={[required()]}
          label="Text"
        />
        <TextInput
          source="imageSrc"
          validate={[required()]}
          label="Image URL"
        />
        <TextInput
          source="audioSrc"
          validate={[required()]}
          label="Audio URL"
        />
        <BooleanInput 
          source="correct" 
          label="Is Correct?"
        />
        <ReferenceInput 
          source="challengeId"
          reference="challenges"
        />
      </SimpleForm>
    </Create>
  )
}