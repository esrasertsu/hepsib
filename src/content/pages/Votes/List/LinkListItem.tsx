import { observer } from 'mobx-react'
import { useContext } from 'react';
import { Icon } from 'semantic-ui-react';
import Box from 'src/app/components/Box';
import ListItem from 'src/app/components/List/ListItem';
import Text from 'src/app/components/Text';
import { ILink } from 'src/app/models/links'
import { RootStoreContext } from 'src/app/stores/rootStore';

interface IProps{
    link: ILink;
}
export default observer( function LinkListItem({link}:IProps){
   
    const rootStore = useContext(RootStoreContext);
    const { upVotes, downVotes,deleteLink } = rootStore.linkStore;

    const handleUpVote = (linkurl:string) =>{
        upVotes(linkurl);

    }

    const handleDownVote = (linkurl:string) =>{
        downVotes(linkurl);
    }

    const handleDeleteItem =  (linkurl:string) =>{
        deleteLink(linkurl);
    }

  return (
    
        <ListItem key={link.linkUrl} className="listItem">
            <div className='tooltip' onClick={() => handleDeleteItem(link.linkUrl)}>
              <Icon name="trash" color='red' />    
            </div>
            <Box className='listItem-vote-box'>
              <Text color="black" className='capital extra-bold' size="big" align='center'>
                     {link.votes}
                </Text> 
                <Text color="black" className='capital bold' align='center'>
                    points
                </Text>
            </Box>
           <div className='content-wrapper'>
               <div className='content'>
                    <Text color="black" className='bold' align='left' size="header">
                        {link.linkName}
                    </Text>
                    <a href={link.linkUrl} target="_blank">
                        ({link.linkUrl})
                    </a>
               </div>
                    <div className='btn-container'>
                        <Text color="secondary" className='bold' align='left' onClick={() => handleUpVote(link.linkUrl)}>
                            <Icon name="arrow up" /> <span>Up Vote</span>
                        </Text>
                        <Text color="secondary" className='bold' align='left' onClick={() => handleDownVote(link.linkUrl)}>
                            <Icon name="arrow down" /><span>Down Vote</span>
                        </Text>
                    </div>
           </div> 

            </ListItem>
  
  )

})