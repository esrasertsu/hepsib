import { observer } from 'mobx-react'
import { useContext, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import Box from 'src/app/components/Box';
import ListItem from 'src/app/components/List/ListItem';
import Text from 'src/app/components/Text';
import { ILink } from 'src/app/models/links'
import { RootStoreContext } from 'src/app/stores/rootStore';
import Modal from 'src/app/components/Modal';
import { ModalButtonWrapper, ModalContent, ModalParagraph, ModalTitle } from 'src/app/components/Modal/ModalContent';
import CloseIcon from 'src/app/components/Modal/CloseIcon';

interface IProps{
    link: ILink;
}
export default observer( function LinkListItem({link}:IProps){
   
    const rootStore = useContext(RootStoreContext);
    const { upVotes, downVotes,deleteLink } = rootStore.linkStore;

    const {openModal,closeModal,modal} = rootStore.modalStore;
    const [show, setShow] = useState(false);

    const handleUpVote = (linkurl:string) =>{
        upVotes(linkurl);

    }

    const handleDownVote = (linkurl:string) =>{
        downVotes(linkurl);
    }

    const handleDeleteItem =  (link:ILink) =>{
        if(modal.open) closeModal();
      
        openModal("Giriş Yap", <>
        <CloseIcon onClick={closeModal}/>
         <ModalContent>
            {/* <CommentIcon /> */}
            <ModalTitle>Do you want to remove</ModalTitle>
            <ModalParagraph>
              {link.linkName}
            </ModalParagraph>
            <ModalButtonWrapper>
              <Button onClick={closeModal}>Cancel</Button>
              <Button onClick={() => deleteLink(link.linkUrl)}>
                Yes
              </Button> 
            </ModalButtonWrapper>
          </ModalContent>
        </>,false,
        "") 
    }

  return (
    
        <ListItem key={link.linkUrl} className="listItem">
            <div className='tooltip' onClick={() => handleDeleteItem(link)}>
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