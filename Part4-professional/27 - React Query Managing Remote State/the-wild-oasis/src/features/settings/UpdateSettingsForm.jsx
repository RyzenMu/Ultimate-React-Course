import { is } from 'date-fns/locale';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './useSettings';
import {useSettings} from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';
import { updateSetting } from '../../services/apiSettings';

function UpdateSettingsForm() {
  const {isLoading, settings: {
    minBookingLength,
    maxBookingLength,
    maxGuestPerBooking,
    breakfastPrice,
  } = {}} = useSetting();

  const {isUpdating, updateSettings} = useUpdateSetting();

  if(isLoading) return <Spinner/>

  function handleUpdate(e, field){
    const {value} = e.target;
    if (!value) return;
    updateSetting({[field] : value})
  }
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBookingLength} onBlur={e=>handleUpdate(e, 'minBookingLength')} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur={e=>handleUpdate(e, 'maxBookingLength')} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking} onBlur={e=>handleUpdate(e, 'maxGuestPerBooking')} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e=>handleUpdate(e, 'breakfast-price')} disabled={isUpdating}/>
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
