import { observer } from 'mobx-react';
import Box from '../../../../app/components/Box';
import Text from 'src/app/components/Text';
import { Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router';
import LinkList from './LinkList';
import Divider from 'src/app/components/Divider';
import Dropdown from 'src/app/components/Dropdown';
import { useContext } from 'react';
import { RootStoreContext } from 'src/app/stores/rootStore';

const items = [
  {
    id: "most",
    value:  <>
    Most Voted ( Z <Icon name='arrow right' />A)
    </>,
  },
  {
    id: "less",
    value:  <>
    Less Voted ( A <Icon name='arrow right' />Z)
    </>,  }
];
 

function VotesPage() {

  const rootStore = useContext(RootStoreContext);
  const {setPredicate} = rootStore.linkStore;

  let history = useNavigate();
  
  const showUserDetails = (): void =>{
    history(`/votes/new`)
 }

   const handleChange = (selected:any) => {
      setPredicate(selected.id);
   }

  return (
     <div className='container'>
      <div className='addNewItem'  role="button" onClick={showUserDetails}>
        <Box>
           <Icon name='plus' size="huge" color="blue"></Icon>
        </Box>
        <Text color="black" className='capital bold' size="big" align="center">
          Submit a link 
        </Text>
      </div>
      <Divider />
      <Dropdown title="Order by" items={items} onChange={handleChange} />
      <LinkList />
      </div>
  );
}

export default observer(VotesPage);
