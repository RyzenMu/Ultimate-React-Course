import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useMutation } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import supabase from "../../services/supabaseClient";
import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm({cabinToEdit = {}}) {

  const {id: editId, ...editValues} = cabinToEdit;
  const isEditSession = Boolean(editId);
  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues:isEditSession ? editValues : {},
  });
  const {errors} = formState;
  const queryClient = useQueryClient();

  // const {mutate : createCabin, isLoading: isCreating} = useMutation({
  //   mutationFn: createEditCabin,
  //   onSuccess : () => {
  //     toast.success('New cabin successfully created');
  //     queryClient.invalidateQueries({queryKey : ['cabins']});
  //     reset();
  //   },
  //   onError : (err) => toast.error(err.message), 
  // });

  const {isCreating, createCabin} = useCreateCabin();
  const {isEditing, editCabin} = useEditCabin();
  
  
 
  const isWorking = isCreating || isEditing;

  function onSubmit(data){
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    if(isEditSession) editCabin({newCabinData : {...data, image}, id: editId});
    else createCabin({...data, image: data.image[0]}, {
      onSuccess: (data) =>{ 
        console.log(data);
        reset();
      },
    })
  }
  function onError(errors){
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" 
        {
          ...register("name", {
            required : "This field is required",          
          })
        }
        disabled = {isWorking}
        />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" 
            {
              ...register("maxCapacity", {
                required : "This field is required",
                min : {
                  value : 1,
                  message : "Capacity should be atleast one",
                }
              })
            }
        disabled = {isWorking}
             />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" 
            {
              ...register("regularPrice", {
                required : "This field is required"
              })
            }
        disabled = {isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} 
            {
              ...register("discount", {
                required : "This field is required",
                validate: value => value <= getValues().regularPrice || "Discount should be less than regular price",
              })
            }/>
        disabled = {isWorking}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue=""
            {
              ...register("description", {
                required : "This field is required"
              })
            } />
        disabled = {isWorking}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*"  type="file"
            {
              ...register("image", {
                required : isEditSession ? false : "This field is required"
              })
            }
            />
        disabled = {isWorking}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit' : 'Add cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
