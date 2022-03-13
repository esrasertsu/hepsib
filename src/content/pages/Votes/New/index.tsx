import { observer } from 'mobx-react';
import { Form as FinalForm , Field } from 'react-final-form';
import { combineValidators, composeValidators, hasLengthGreaterThan, isRequired } from 'revalidate';
import { Button, Form, Header, Icon } from 'semantic-ui-react';
import Text from 'src/app/components/Text';
import { ILinkForm } from 'src/app/models/links';
import TextInput from 'src/app/components/FormInput/TextInput';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { RootStoreContext } from 'src/app/stores/rootStore';



const validate = combineValidators({
  linkUrl: composeValidators(
    isRequired({message: 'Link Url zorunlu alandır.'}),
    hasLengthGreaterThan(10)({message: 'Link Url en az 10 karakter uzunluğunda olmalıdır.'})
  )(),
  linkName: isRequired({ message: 'Link name zorunlu alan.' })
})

function AddVotesPage() {

  const rootStore = useContext(RootStoreContext);
  const { saveLink } = rootStore.linkStore;

  let history = useNavigate();

  const handleClikBackButton = (): void =>{
      history(`/votes/list`)
  }
     
  const handleSave = async(values:ILinkForm) =>{
    saveLink(values);
  }

  return (
    <>
    <div className='container'>
      <div style={{display:"flex", alignItems:"center"}} onClick={handleClikBackButton}>
        <Icon name="arrow left" size="big"></Icon>
        <Text>Return to List</Text>
      </div>
      <div className='small-space'></div>

      <FinalForm
        onSubmit={handleSave}
        validate={validate}
        render={({
          handleSubmit,
          submitting,
          submitError,
          invalid,
          pristine,
          dirtySinceLastSubmit,
        }) => (
          <Form onSubmit={handleSubmit} error>
            <Header
              as="h2"
              content="Add New Link"
              textAlign="center"
            />
           
            <label id="lbl_LinkName">Link Name*</label>
            <Field
              labelName="lbl_LinkName"
              name="linkName"
              placeholder="e.g. Alphabet"
              component={TextInput}
            />
           <label id="lbl_LinkUr">Link Url*</label>
            <Field labelName="lbl_LinkUr" name="linkUrl" placeholder="e.g. https://google.com" component={TextInput}
            />
              

            <Button
              disabled={(invalid && !dirtySinceLastSubmit) || pristine}
              loading={submitting}
              className='orangeBtn'
              circular
              content="Giriş"
              fluid
            />
            
         

          </Form>
        )}
      />
          </div>
    </>
  );
}

export default observer(AddVotesPage);
